import React, { Component } from "react";
import { connect } from "react-redux";
import { selectNav } from "../actions/index";
import { bindActionCreators } from "redux";

class NavList extends Component {
  findDistance(nav) {
    const userLat = this.props.UserLocation.lat * 1;
    const userLong = this.props.UserLocation.lng * 1;

    const navLat = nav.lat * 1;
    const navLng = nav.lng * 1;

    const distance = Math.sqrt(
      (userLat - navLat) * (userLat - navLat) +
        (userLong - navLng) * (userLong - navLng)
    );

    return distance.toFixed(2);
  }

  renderList() {
    return this.props.navs.map(nav => {
      const dist = this.findDistance(nav);
      return (
        <li
          key={nav.name}
          onClick={() => this.props.selectNav(nav)}
          className="nav-list-item"
        >
          {nav.name + "....." + dist + "mi"}
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
