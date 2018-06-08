import React, { Component } from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import MapNavs from "./map_navs";

export default class Map extends Component {
  render() {
    console.log("MN: ", MapNavs);
    const Map = ReactMapboxGl({
      accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
      logoPosition: "bottom-left"
    });
    return (
      <div className="map">
        <Map
          style="mapbox://styles/mapbox/outdoors-v9"
          containerStyle={{
            height: "50vh",
            width: "100vw"
          }}
          center={[-159.5261, 22.0522]}
          zoom={[9.35]}
        >
          <script>
            {map.addControl(
              new mapboxgl.GeolocateControl({
                positionOptions: { enableHighAccuracy: true },
                trackUserLocation: true
              })
            )}
          </script>
          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}
          >
            {/* {navs.map(() => {
              return <Feature coordinates={nav.coordinate} />;
            })} */}

            {/* GeoFence 1 */}
            <Feature coordinates={[-159.3378, 22.0388]} />
            <Feature coordinates={[-159.3385, 22.0356]} />
            <Feature coordinates={[-159.3373, 22.0321]} />
            <Feature coordinates={[-159.3362, 22.0339]} />
            <Feature coordinates={[-159.3338, 22.0419]} />
            <Feature coordinates={[-159.3362, 22.044]} />
            <Feature coordinates={[-159.338, 22.0426]} />
          </Layer>
        </Map>
      </div>
    );
  }
}
// function mapStateToProps(state) {
//   return {
//     navs: state.navs,
//     UserLocation: state.UserLocation
//   };
// }

// export default connect(mapStateToProps);
