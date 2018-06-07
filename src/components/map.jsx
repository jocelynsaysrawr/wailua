import React, { Component } from 'react'
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

export default class Map extends Component {

  render() {
    console.log(process.env);
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
            layout={{ "icon-image": "marker-15" }}>
            <Feature coordinates={[-159.34, 22.0522]} />
            <Feature coordinates={[-159.34, 22.03]} />
            <Feature coordinates={[-159.38, 22.03]} />
            <Feature coordinates={[-159.40, 22.05]} />
            <Feature coordinates={[-159.37, 22.05]} />
          </Layer>
        </Map>
      </div>
    )
  }
}
