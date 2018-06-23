import React, { Component } from "react";
import { storyAction } from '../actions/index';
import { connect } from 'react-redux';

class StoryList extends Component {

  showStory() {
    const story = this.props.story;
    return <div>{story}</div>
  }

  componentWillMount() {
    this.props.storyAction();
  }

  render() {
    return (
      <div>
        {this.showStory()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    story: state.story
  }
}

export default connect(mapStateToProps, { storyAction })(StoryList)