import React, { Component } from "react";
import { connect } from "react-redux";
import { selectNav } from "../actions/index";
import { bindActionCreators } from "redux";

class NavList extends Component {
  renderList() {
    return this.props.navs.map((nav, i) => {
      const latLng = nav.coordinate;
      return (
        <li
          key={nav.name + i}
          onClick={() => this.props.selectNav(nav)}
          className="nav-list-item"
        >
          {nav.name + "....." + latLng}
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
    UserLocation: state.UserLocation
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectNav }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavList);
