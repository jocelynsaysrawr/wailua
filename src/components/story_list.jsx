import React, { Component } from "react";
import { storyAction, loadingAction } from "../actions/index";
import { connect } from "react-redux";
// import LoadingScreen from "react-loading-screen";
import "../style/story_list.scss";
import { FG_Moolelo } from "../story_fragments/FG_Moolelo";
import { FG_Historical } from "../story_fragments/FG_Historical";
import { FG_Current } from "../story_fragments/FG_Current";

class StoryList extends Component {
  state = {
    story_display: ""
  };

  toggleShow(fragment) {
    this.setState({
      story_display: fragment
    });
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ loading: false });
    // }, 1000);

    this.props.storyAction(this.props.activeLocation);

    // this.setState({
    //   currentQuote: this.randomQuote()
    // });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activeLocation !== this.props.activeLocation) {
      this.props.storyAction(this.props.activeLocation);
    }
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
        /> 
      */}
        <div className="widget">
          <button
            className="widget"
            onClick={() => this.toggleShow(FG_Moolelo)}
          >
            <h2>Moolelo</h2>
          </button>
          <button
            className="widget"
            onClick={() => this.toggleShow(FG_Historical)}
          >
            <h2>Historical Accounts</h2>
          </button>
          <button
            className="widget"
            onClick={() => this.toggleShow(FG_Current)}
          >
            <h2>Current Narrative</h2>
          </button>
        </div>

        <div id="story-container">
          {this.state.story_display !== ""
            ? this.state.story_display()
            : this.state.story_display}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    story: state.story,
    loading: state.loading,
    activeLocation: state.activeLocation
  };
}

export default connect(
  mapStateToProps,
  { storyAction, loadingAction }
)(StoryList);

// {this.props.story.moolelo ? this.showMoolelo() : <p />}

// {this.props.story.moolelo ? (
//   this.showMoolelo().map((p, index) => (
//     <React.Fragment>
//       <p key={index} className={p.className.S}>
//         {p.content.S}
//       </p>
//       <br />
//     </React.Fragment>
//   ))
// ) : (
//   <p />
// )}
