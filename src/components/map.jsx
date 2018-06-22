import React from "react";
import PropTypes from "prop-types";
import mapboxgl from "mapbox-gl";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styles from "../style/styles.scss";
import { selectNav, selectLocation, findUser } from "../actions/index";
import * as turf from "@turf/turf";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

class Map extends React.Component {
  map;

  static propTypes = {
    navs: PropTypes.object.isRequired,
    geofences: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
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
    // console.log("Props: ", this.props);
    this.map.flyTo({ center: lngLat, zoom: 14 });
    if (actLoc) {
      if (prevLoc && prevLoc !== actLoc) {
        prevLoc.style.border = "2px solid white";
        prevLoc.style.height = "30px";
        prevLoc.style.width = "30px";
      }
      actLoc.style.border = "4px solid dodgerblue";
      actLoc.style.height = "40px";
      actLoc.style.width = "40px";
    }
  }

  componentDidMount() {
    //defaults focus to active location
    this.props.selectNav(this.props.activeNav);
    this.props.selectLocation(this.props.activeLocation);

    const navs = this.props.navs;

    const from = this.props.navs.features[0].geometry.coordinates;
    const to = turf.point([-159.348612, 22.048136]);
    console.log("turf: ", turf.distance(from, to, { units: "miles" }));

    //Mounts map and sets initial specs
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/outdoors-v9",
      center: [-159.5261, 22.0522],
      zoom: 9.35
    });
    //adjusts size of canvas container
    const mapCanvas = document.getElementsByClassName("mapboxgl-canvas")[0];
    mapCanvas.style.position = "relative";
    this.map.resize();

    this.map.on("load", () => {
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

        el.addEventListener(
          "click",
          () => (
            //sets Nav geoJSON in props
            this.props.selectNav(nav),
            //sets marker element pointer in props
            this.props.selectLocation(location)
          )
        );

        new mapboxgl.Marker(el).setLngLat(lngLat).addTo(this.map);
      });

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
  }

  //renders whole component as one div
  render() {
    return <div ref={el => (this.mapContainer = el)} style={styles} />;
  }
}

//maps state, currently no state to access
function mapStateToProps(state) {
  return {
    navs: state.navs,
    geofences: state.geofences,
    activeLocation: state.activeLocation,
    activeNav: state.activeNav,
    userLocation: state.userLocation
  };
}

// Anything returned from this function will end up as props
// on the Map container
function mapDispatchToProps(dispatch) {
  // Whenever selectNav is called, the result should be passed
  // to all of our reducers
  return bindActionCreators(
    {
      selectNav: selectNav,
      selectLocation: selectLocation,
      findUser: findUser
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
