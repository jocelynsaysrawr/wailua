import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ArrowRight from "../assets/ChevronRight-512.png";
import { selectNav, selectLocation } from "../actions/index";
import "../style/map_quicknav.scss";

class MapRightArrowButton extends React.Component {
  static propTypes = {
    navs: PropTypes.object.isRequired,
    activeLocation: PropTypes.string.isRequired,
    activeNav: PropTypes.object.isRequired
  };

  cycleNavsRight() {
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
    if (activeNavIndex === sortedNavArray.length - 1) {
      this.props.selectNav(sortedNavArray[0]);
      this.props.selectLocation(sortedNavArray[0].properties.location);
    } else {
      this.props.selectNav(sortedNavArray[activeNavIndex + 1]);
      this.props.selectLocation(
        sortedNavArray[activeNavIndex + 1].properties.location
      );
    }
  }

  render() {
    return (
      <button
        id="map-right-arrow"
        className="map-arrow-btn"
        onClick={() => {
          this.cycleNavsRight();
        }}
      >
        <img className="map-arrow-img" src={ArrowRight} alt="right-arrow"/>
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
)(MapRightArrowButton);
