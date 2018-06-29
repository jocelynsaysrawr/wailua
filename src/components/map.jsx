import React from "react";
import PropTypes from "prop-types";
import mapboxgl from "mapbox-gl";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styles from "../style/styles.scss";
import {
  selectNav,
  selectLocation,
  findUser,
  setCenterZoom,
  fireModal,
  selectGeo
} from "../actions/index";
import {
  nearestPoint,
  booleanPointInPolygon,
  point,
  featureCollection,
  polygon
} from "@turf/turf";
import { setTimeout } from "timers";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

let gotNearest = false;
let userPing = false;
let canFlyto = false;
let isInGeo = false;

const points = featureCollection([
  point([-159.3363627, 22.038345]),
  point([-159.359589, 22.047907]),
  point([-159.359208, 22.039398]),
  point([-159.348612, 22.048136]),
  point([-159.335051, 22.048033])
]);

class Map extends React.Component {
  map;

  static propTypes = {
    navs: PropTypes.object.isRequired,
    geofences: PropTypes.object.isRequired,
    activeLocation: PropTypes.string.isRequired,
    activeNav: PropTypes.object.isRequired,
    userLocation: PropTypes.array.isRequired,
    centerZoom: PropTypes.object.isRequired
  };

  //Sets nearest point as active point on first load
  getNearestPoint() {
    const nPoint = nearestPoint(this.props.userLocation, points);
    this.props.navs.features.forEach(n => {
      if (
        n.geometry.coordinates[0] === nPoint.geometry.coordinates[0] &&
        n.geometry.coordinates[1] === nPoint.geometry.coordinates[1]
      ) {
        this.props.selectNav(n);
        this.props.selectLocation(n.properties.location);
        gotNearest = true;
        setTimeout(() => (canFlyto = true), 5000);
      }
    });
  }

  flyToActiveNav() {
    this.map.flyTo(this.props.activeNav.geometry.coordinates);
  }

  componentDidUpdate(prevProps) {
    //fits map to container
    this.map.resize();
    //centers and zooms on marker
    const lngLat = this.props.activeNav.geometry.coordinates;
    //Changes previously selected marker back to normal CSS
    let prevLoc;
    if (prevProps.activeNav) {
      prevLoc = document.getElementById(
        prevProps.activeNav.properties.location
      );
    }
    const actLoc = document.getElementById(
      this.props.activeNav.properties.location
    );

    if (actLoc && prevLoc && prevLoc !== actLoc) {
      prevLoc.style.border = "2px solid white";
      prevLoc.style.height = "30px";
      prevLoc.style.width = "30px";
      actLoc.style.border = "4px solid dodgerblue";
      actLoc.style.height = "40px";
      actLoc.style.width = "40px";
      if (canFlyto) {
        this.map.flyTo({ center: lngLat, zoom: 14 });
      }
    }
  }

  componentDidMount() {
    const navs = this.props.navs;

    //Mounts map and sets initial specs
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/outdoors-v9",
      center: this.props.centerZoom.center,
      zoom: this.props.centerZoom.zoom
    });

    //adjusts size of canvas container
    const mapCanvas = document.getElementsByClassName("mapboxgl-canvas")[0];
    mapCanvas.style.position = "relative";

    //Tracks user location
    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: { enableHighAccuracy: true },
      trackUserLocation: true,
      showUserLocation: true
    });
    geolocate.on("geolocate", e => {
      this.props.findUser([e.coords.longitude, e.coords.latitude]);
      console.log("UL: ", this.props.userLocation);
    });

    this.map.on("load", () => {
      this.map.resize();
      //Adds GeoJSON polygons for all "geofences"
      this.map.addSource("geofences", this.props.geofences);
      this.map.addLayer({
        id: "polyfill",
        type: "fill",
        source: "geofences",
        paint: {
          "fill-color": "#888888",
          "fill-opacity": 0.6
        },
        filter: ["==", "$type", "Polygon"]
      });

      //Adds geopoints with symbols for fly and center effects
      this.map.addLayer({
        id: "symbols",
        type: "symbol",
        source: {
          type: "geojson",
          data: navs
        },
        layout: {
          "icon-image": "{icon}-15",
          "text-field": "{title}",
          "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
          "text-offset": [0, 0.6],
          "text-anchor": "top"
        }
      });

      //Adds markers from the Navs reducer, puts location in state
      navs.features.forEach(nav => {
        const el = document.createElement("div");
        el.className = "marker";
        const lngLat = nav.geometry.coordinates;
        const location = nav.properties.location;
        el.id = location;
        el.style.backgroundImage = nav.properties.marker;

        el.addEventListener("click", () => {
          //sets Nav geoJSON in props
          this.props.selectNav(nav);
          //sets marker element pointer in props
          this.props.selectLocation(location);
        });

        new mapboxgl.Marker(el).setLngLat(lngLat).addTo(this.map);
      });

      this.map.addControl(geolocate);

      this.map.addControl(new mapboxgl.NavigationControl());
    });

    // Change the cursor to a pointer when the it enters a feature in the 'symbols' layer.
    this.map.on("mouseenter", "symbols", () => {
      this.map.getCanvas().style.cursor = "pointer";
    });

    // Change it back to a pointer when it leaves.
    this.map.on("mouseleave", "symbols", () => {
      this.map.getCanvas().style.cursor = "";
    });

    this.map.on("data", () => {
      //Sets camera Center and Zoom to ReduxState on a 5sec ping timer
      if (!userPing) {
        userPing = true;
        setTimeout(() => {
          this.props.setCenterZoom(this.map.getCenter(), this.map.getZoom());
          userPing = false;
        }, 5000);
      }

      //Locates user and sets starting center to userLocation
      const geoButton = document.getElementsByClassName(
        "mapboxgl-ctrl-geolocate"
      )[0];
      if (geoButton && geoButton.getAttribute("aria-pressed") === "false") {
        geolocate.trigger();
        if (gotNearest === false) {
          // defaults starting activeLocation to nearest nav
          this.getNearestPoint();
        }
      }

      //Checks to see if user is in a geofence.
      setTimeout(() => {
        if (!isInGeo) {
          this.props.geofences.data.features.forEach(geo => {
            if (
              booleanPointInPolygon(
                point(this.props.userLocation),
                polygon(geo.geometry.coordinates)
              )
            ) {
              console.log("You have entered ", geo.properties.title, "!");
              this.props.selectGeo(geo);
              this.props.fireModal(true);
              isInGeo = true;
            }
          });
        } else if (isInGeo) {
          isInGeo = false;
          if (!isInGeo) {
            this.props.geofences.data.features.forEach(geo => {
              if (
                booleanPointInPolygon(
                  point(this.props.userLocation),
                  polygon(geo.geometry.coordinates)
                )
              ) {
                isInGeo = true;
              }
            });
          }
        }
      }, 3000);
    });
  }

  //renders whole component as one div
  render() {
    return <div ref={el => (this.mapContainer = el)} style={styles} />;
  }
}

function mapStateToProps(state) {
  return {
    navs: state.navs,
    geofences: state.geofences,
    activeLocation: state.activeLocation,
    activeNav: state.activeNav,
    userLocation: state.userLocation,
    centerZoom: state.centerZoom,
    modalOn: state.modalOn,
    activeGeo: state.activeGeo
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectNav: selectNav,
      selectLocation: selectLocation,
      findUser: findUser,
      setCenterZoom: setCenterZoom,
      fireModal: fireModal,
      selectGeo: selectGeo
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
