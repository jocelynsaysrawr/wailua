import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ArrowLeft from "../assets/arrow-left.png";
import { selectNav, selectLocation } from "../actions/index";
import "../style/map_quicknav.scss";


class MapLeftArrowButton extends React.Component {
  static propTypes = {
    navs: PropTypes.object.isRequired,
    activeLocation: PropTypes.string.isRequired,
    activeNav: PropTypes.object.isRequired
  };

  cycleNavsLeft() {
    const sortedNavArray = this.props.navs.features.sort((a, b) => {
      return a.geometry.coordinates[0] > b.geometry.coordinates[0] ? 1 : -1;
    });

    let activeNavIndex;
    sortedNavArray.forEach((nav, i) => {
      const myNavCoord = nav.geometry.coordinates;
      if (
        myNavCoord[0] === this.props.activeNav.geometry.coordinates[0] &&
        myNavCoord[1] === this.props.activeNav.geometry.coordinates[1]
      ) {
        activeNavIndex = i;
      }
    });
    console.log("anI: ", activeNavIndex);
    if (activeNavIndex === 0) {
      this.props.selectNav(sortedNavArray[sortedNavArray.length - 1]);
      this.props.selectLocation(
        sortedNavArray[sortedNavArray.length - 1].properties.location
      );
    } else {
      this.props.selectNav(sortedNavArray[activeNavIndex - 1]);
      this.props.selectLocation(
        sortedNavArray[activeNavIndex - 1].properties.location
      );
    }
  }

  render() {
    return (
      <button
        id="map-left-arrow"
        className="map-arrow-btn"
        onClick={() => {
          this.cycleNavsLeft();
        }}
      >
        <img className="map-arrow-img" src={ArrowLeft} />
      </button>
    );
  }
}

function mapStateToProps(state) {
  return {
    navs: state.navs,
    activeLocation: state.activeLocation,
    activeNav: state.activeNav
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectNav: selectNav,
      selectLocation: selectLocation
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapLeftArrowButton);
