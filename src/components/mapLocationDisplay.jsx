import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "../style/styles.scss";
import ArrowRight from "../assets/arrow-right.png";
import "../style/map_quicknav.scss";

class MapLocationDisplay extends React.Component {
  static propTypes = {
    activeLocation: PropTypes.string.isRequired,
    activeNav: PropTypes.object.isRequired
  };

  render() {
    return (
      <button
        id="map-location-display"
        className="map-location-btn"
        onClick={() => {
          //   this.cycleNavsRight();
        }}
      >
        <h1>{this.props.activeLocation}</h1>
      </button>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeLocation: state.activeLocation,
    activeNav: state.activeNav
  };
}

export default connect(mapStateToProps)(MapLocationDisplay);
