import React from "react";
import PropTypes from "prop-types";
import mapboxgl from "mapbox-gl";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styles from "../style/styles.scss";
import { selectNav, selectLocation } from "../actions/index";

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
    this.map.flyTo({ center: lngLat, zoom: 14 });
    //Changes previously selected marker back to normal CSS
    let pLoc;
    if (prevProps.activeNav) {
      pLoc = document.getElementById(prevProps.activeNav.properties.location);
    }
    const aLoc = document.getElementById(
      this.props.activeNav.properties.location
    );
    console.log("Props: ", this.props);
    if (aLoc) {
      if (pLoc && pLoc !== aLoc) {
        pLoc.style.border = "1px outset gray";
        pLoc.style.height = "30px";
        pLoc.style.width = "30px";
      }
      aLoc.style.border = "3px outset dodgerblue";
      aLoc.style.height = "40px";
      aLoc.style.width = "40px";
    }
  }

  componentDidMount() {
    const navs = this.props.navs;
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
      this.map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: { enableHighAccuracy: true },
          trackUserLocation: true
        })
      );

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
    activeNav: state.activeNav
  };
}

// Anything returned from this function will end up as props
// on the Map container
function mapDispatchToProps(dispatch) {
  // Whenever selectNav is called, the result should be passed
  // to all of our reducers
  return bindActionCreators(
    { selectNav: selectNav, selectLocation: selectLocation },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
