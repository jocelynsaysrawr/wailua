import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styles from "../style/styles.scss";
import ArrowLeft from "../assets/arrow-left.png";
import {
  selectNav,
  selectLocation,
  findUser,
  setCenterZoom
} from "../actions/index";

const bStyle = {
  // backgroundImage: "url(../assets.arrow-left.png)",
  height: "6em",
  width: "6em",
  display: "block",
  zIndex: 9001,
  // float: "left",
  position: "relative",
  bottom: "12vh"
};

const imgStyle = {
  height: "100%",
  width: "100%"
};

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
        style={bStyle}
        id="map-left-arrow"
        className="map-arrow-btn"
        onClick={() => {
          this.cycleNavsLeft();
        }}
      >
        <img style={imgStyle} src={ArrowLeft} />
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
