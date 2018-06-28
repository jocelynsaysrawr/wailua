import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../style/map_quicknav.scss";
// import { flyToActiveNav } from "./map";

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
          //   flyToActiveNav();
        }}
      >
        <h1>{this.props.activeLocation.toUpperCase()}</h1>
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
