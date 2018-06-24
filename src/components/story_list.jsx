import React, { Component } from "react";
import { storyAction, loadingAction } from '../actions/index';
import { connect } from 'react-redux';
import LoadingScreen from 'react-loading-screen';

class StoryList extends Component {
  state = {
    loading: true,
    currentQuote: null
  }

  showStory() {
    const story = this.props.story;
    return <div>{story}</div>
  }

  randomQuote() {
    const quote = this.props.loading[Math.floor(Math.random() * this.props.loading.length)]
    return quote;
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 1700);

    this.props.storyAction();

    this.setState({
      currentQuote: this.randomQuote()
    })
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        <LoadingScreen
          loading={loading}
          bgColor='#373A46'
          spinnerColor='#9ee5f8'
          textColor='#ffffff'
          logoSrc='https://cdn0.iconfinder.com/data/icons/smiley-10/100/Poop-512.png'
          text={this.state.currentQuote}>
          {this.showStory()}
        </LoadingScreen>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    story: state.story,
    loading: state.loading
  }
}

export default connect(mapStateToProps, { storyAction, loadingAction })(StoryList)