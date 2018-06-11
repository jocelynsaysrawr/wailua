import React from "react";
import PropTypes from "prop-types";
import mapboxgl from "mapbox-gl";
import { connect } from "react-redux";
import styles from "../style/styles.scss";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

class Map extends React.Component {
  map;

  static propTypes = {
    navs: PropTypes.object.isRequired,
    geofences: PropTypes.object.isRequired,
    activeLocation: PropTypes.func.isRequired
  };

  flyAndZoom = e => {
    this.map.flyTo({ center: e.features[0].geometry.coordinates, zoom: 14 });
  };
  //for future use when updates are necessary
  componentDidUpdate() {}

  componentDidMount() {
    const navs = this.props.navs;

    //Mounts map and sets initial specs
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/outdoors-v9",
      center: [-159.5261, 22.0522],
      zoom: 9.35
    });

    this.map.on("load", () => {
      //adjusts size of canvas container
      const mapCanvas = document.getElementsByClassName("mapboxgl-canvas")[0];
      const mapDiv = document.getElementById("map");

      mapCanvas.style.position = "relative";

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

      //Adds markers from the Navs reducer, mostly aesthetic
      navs.features.forEach(marker => {
        const el = document.createElement("div");
        el.className = "marker";

        const lngLat = marker.geometry.coordinates;

        el.addEventListener(
          "click",
          () => (el.style.border = "2px solid white")
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
    });
    // Center the map on the coordinates of any clicked symbol from the 'symbols' layer.

    this.map.on("click", "symbols", e => {
      this.map.flyTo({ center: e.features[0].geometry.coordinates, zoom: 14 });
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
    activeLocation: state.activeLocation
  };
}

export default connect(mapStateToProps)(Map);
