import React, { Component } from "react";
import MapLeftArrowButton from "./mapLeftArrowButton";
import MapRightArrowButton from "./mapRightArrowButton";
import MapLocationDisplay from "./mapLocationDisplay";
import "../style/map_quicknav.scss";

export default class MapQuickNav extends React.Component {
  render() {
    return (
      <div id="map-quicknav">
        <div id="quicknav-wrapper">
          <MapLeftArrowButton />
          <MapLocationDisplay />
          <MapRightArrowButton />
        </div>
      </div>
    );
  }
}
