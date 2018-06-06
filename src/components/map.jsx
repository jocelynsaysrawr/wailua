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
          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}
          >
            {/* {navs.map(() => {
              return <Feature coordinates={nav.coordinate} />;
            })} */}
            <Feature coordinates={[-159.34, 22.0522]} />
            <Feature coordinates={[-159.34, 22.03]} />
            <Feature coordinates={[-159.38, 22.03]} />
            <Feature coordinates={[-159.4, 22.05]} />
            <Feature coordinates={[-159.37, 22.05]} />
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
