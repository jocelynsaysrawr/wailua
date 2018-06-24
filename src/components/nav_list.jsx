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
    return this.props.navs.features.map((nav, i) => {
      const latLng = nav.geometry.coordinates;
      const location = nav.properties.location;
      return (
        <li
          key={nav.properties.title + i}
          onClick={() => {
            this.props.selectNav(nav), selectLocation(location);
          }}
          className="nav-list-item"
        >
          {nav.properties.title + "....." + this.getDistance(nav)}
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
