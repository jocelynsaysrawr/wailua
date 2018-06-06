import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

class MapNavs extends Component {
  renderList() {
    return this.props.navs.map(nav => {
      return <Feature coordinates={nav.coordinate} />;
    });
  }
  render() {
    return <div>{this.renderList()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    navs: state.navs
  };
}

export default connect(mapStateToProps)(MapNavs);
