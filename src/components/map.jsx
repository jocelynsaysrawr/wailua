import React from "react";
import PropTypes from "prop-types";
import mapboxgl from "mapbox-gl";
import { connect } from "react-redux";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

let Map = class Map extends React.Component {
  map;

  static propTypes = {
    // data: PropTypes.object.isRequired,
    // active: PropTypes.object.isRequired
  };

  componentDidUpdate() {}

  componentDidMount() {
    //Mounts map and sets initial specs
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/outdoors-v9",
      // containerStyle: {
      //   height: "50vh",
      //   width: "100vw"
      // },
      center: [-159.5261, 22.0522],
      zoom: 9.35
    });

    this.map.on("load", () => {
      //Tracks user location
      this.map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: { enableHighAccuracy: true },
          trackUserLocation: true
        })
      );

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
    });
  }
  render() {
    return (
      <div ref={el => (this.mapContainer = el)} className="mapContainer" />
    );
  }
};

function mapStateToProps(state) {
  return {
    // data: state.data,
    // active: state.active
  };
}

export default connect(mapStateToProps)(Map);

// export default Map = connect(mapStateToProps)(Map);

// export default Map;
