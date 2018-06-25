import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styles from "../style/styles.scss";
import {
  selectNav,
  selectLocation,
  findUser,
  setCenterZoom
} from "../actions/index";

const sortedNavArray = this.props.navs.features.sort((a, b) => {
  return a.geometry.coordinates[0] > b.geometry.coordinates[0] ? 1 : -1;
});

const bStyle = {
  backgroundImage: "url(../assets.arrow-left.png)"
};

class MapLeftArrowButton extends React.Component {
  static propTypes = {
    navs: PropTypes.object.isRequired,
    activeLocation: PropTypes.string.isRequired,
    activeNav: PropTypes.object.isRequired
  };

  cycleNavsLeft(sNavArray) {
    let activeNavIndex;
    sNavArray.forEach((nav, i) => {
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
      this.props.selectNav(sNavArray[sNavArray.length - 1]);
      this.props.selectLocation(
        sNavArray[sNavArray.length - 1].properties.location
      );
    } else {
      this.props.selectNav(sNavArray[activeNavIndex - 1]);
      this.props.selectLocation(
        sNavArray[activeNavIndex - 1].properties.location
      );
    }
  }

  render() {
    return (
      <div>
        <button
          style={bStyle}
          id="map-left-arrow"
          className="map-arrow-btn"
          onClick={() => {
            this.cycleNavsLeft(sortedNavArray);
          }}
        />
      </div>
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
