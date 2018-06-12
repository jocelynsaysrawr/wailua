import React, { Component } from "react";
import { testAction } from '../actions/index';
import { connect } from 'react-redux';

class Photos extends Component {

  handleClick() {
    this.props.testAction();
    console.log("handleClick", this.props);
  }

  render() {
    console.log(this.props.photos);
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>
          Get Photos
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    photos: state.photos
  }
}

export default connect(mapStateToProps, { testAction })(Photos);