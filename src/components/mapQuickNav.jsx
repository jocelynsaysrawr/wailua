import React from "react";
import MapLeftArrowButton from "./mapLeftArrowButton";
import MapRightArrowButton from "./mapRightArrowButton";
import MapLocationDisplay from "./mapLocationDisplay";
import "../style/map_quicknav.scss";

export default class MapQuickNav extends React.Component {
  render() {
    return (
      <div className="quicknav-wrapper">
        <MapLeftArrowButton />
        <MapLocationDisplay />
        <MapRightArrowButton />
      </div>
    );
  }
}
