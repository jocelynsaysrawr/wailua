import React, { Component } from "react";
import { connect } from "react-redux";
import { selectNav } from "../actions/index";
import { bindActionCreators } from "redux";

class NavList extends Component {
  renderList() {
    return this.props.navs.features.map((nav, i) => {
      const latLng = nav.geometry.coordinates;
      return (
        <li
          key={nav.properties.title + i}
          onClick={() => this.props.selectNav(nav)}
          className="nav-list-item"
        >
          {nav.properties.title + "....." + latLng}
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
    activeLocation: state.activeLocation,
    activeMarker: state.activeMarker
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectNav }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavList);
