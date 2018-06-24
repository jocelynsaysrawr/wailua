import React, { Component } from "react";
import { connect } from "react-redux";
import { selectNav, selectLocation } from "../actions/index";
import { bindActionCreators } from "redux";
import { distance, point } from "@turf/turf";

class NavList extends Component {
  getDistance(nav) {
    const ul = this.props.userLocation;
    const latLng = point(nav.geometry.coordinates);

    return (
      distance(ul, latLng, {
        units: "miles"
      }).toFixed(2) + "mi"
    );
  }

  renderList() {
    const distanceArray = this.props.navs.features
      .map((nav, i) => {
        return [nav, this.getDistance(nav)];
      })
      .sort((a, b) => {
        return a[1] > b[1] ? 1 : -1;
      });

    return distanceArray.map((dArr, i) => {
      const latLng = dArr[0].geometry.coordinates;
      const location = dArr[0].properties.location;
      return (
        <li
          key={dArr[0].properties.title + i}
          onClick={() => {
            this.props.selectNav(dArr[0]), selectLocation(location);
          }}
          className="nav-list-item"
        >
          {dArr[0].properties.title + "....." + dArr[1]}
        </li>
      );
    });
  }
  render() {
    return <ul className="list-group nav">{this.renderList()}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    navs: state.navs,
    userLocation: state.userLocation,
    activeNav: state.activeNav,
    activeLocation: state.activeLocation
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectNav, selectLocation }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavList);
