import React from "react";
import PropTypes from "prop-types";
import mapboxgl from "mapbox-gl";
import { connect } from "react-redux";
import styles from "../style/styles.scss";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

class Map extends React.Component {
  map;

  static propTypes = {
    // data: PropTypes.object.isRequired,
    // active: PropTypes.object.isRequired
  };

  //for future use when updates are necessary
  componentDidUpdate() {}

  componentDidMount() {
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

      //Adds GeoJSON polygon for Lydgate
      this.map.addLayer({
        id: "lydgate",
        type: "fill",
        source: {
          type: "geojson",
          data: {
            type: "Feature",
            geometry: {
              type: "Polygon",
              coordinates: [
                [
                  [-159.3378, 22.0388],
                  [-159.3385, 22.0356],
                  [-159.3373, 22.0321],
                  [-159.3362, 22.0339],
                  [-159.3338, 22.0419],
                  [-159.3362, 22.044],
                  [-159.338, 22.0426]
                ]
              ]
            }
          }
        },
        layout: {},
        paint: {
          "fill-color": "#088",
          "fill-opacity": 0.4
        }
      });
      //Tracks user location
      this.map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: { enableHighAccuracy: true },
          trackUserLocation: true
        })
      );
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
    // data: state.data,
    // active: state.active
  };
}

export default connect(mapStateToProps)(Map);
