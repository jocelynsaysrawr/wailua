import React, { Component } from "react";
import { storyAction, loadingAction } from "../actions/index";
import { connect } from "react-redux";
// import LoadingScreen from "react-loading-screen";
import "../style/story_list.scss";

class StoryList extends Component {
  state = {
    loading: true,
    currentQuote: null
  };

  showStory() {
    const story = this.props.story;
    return <div className="story">{story}</div>;
  }

  randomQuote() {
    const quote = this.props.loading[
      Math.floor(Math.random() * this.props.loading.length)
    ];
    return quote;
  }

  componentWillMount() {
    // setTimeout(() => {
    //   this.setState({ loading: false });
    // }, 1000);

    this.props.storyAction();

    // this.setState({
    //   currentQuote: this.randomQuote()
    // });
  }

  render() {
    return (
      <div className="story-container">
        {/* <LoadingScreen
          loading={loading}
          bgColor="#373A46"
          spinnerColor="#9ee5f8"
          textColor="#ffffff"
          logoSrc="http://res.freestockphotos.biz/pictures/15/15939-illustration-of-a-small-cartoon-mountain-pv.png"
          text={this.state.currentQuote}
        /> */}
        {this.showStory()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    story: state.story,
    loading: state.loading
  };
}

export default connect(
  mapStateToProps,
  { storyAction, loadingAction }
)(StoryList);
