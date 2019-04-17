import React, { Component } from "react";
import { storyAction, loadingAction } from "../actions/index";
import { connect } from "react-redux";
// import LoadingScreen from "react-loading-screen";
import "../style/story_list.scss";
import { FG_Moolelo } from "../story_fragments/fern-grotto/FG_Moolelo";
import { FG_Historical } from "../story_fragments/fern-grotto/FG_Historical";
import { FG_Current } from "../story_fragments/fern-grotto/FG_Current";
import { L_Moolelo } from "../story_fragments/lydgate/L_Moolelo";
import { L_Historical } from "../story_fragments/lydgate/L_Historical";
import { L_Current } from "../story_fragments/lydgate/L_Current";
import { O_Moolelo } from "../story_fragments/opaekaa/O_Moolelo";
import { O_Historical } from "../story_fragments/opaekaa/O_Historical";
import { O_Current } from "../story_fragments/opaekaa/O_Current";
import { WB_Moolelo } from "../story_fragments/wailua-beach/WB_Moolelo";
import { WB_Historical } from "../story_fragments/wailua-beach/WB_Historical";
import { WB_Current } from "../story_fragments/wailua-beach/WB_Current";
import { WR_Moolelo } from "../story_fragments/wailua-river/WR_Moolelo";
import { WR_Historical } from "../story_fragments/wailua-river/WR_Historical";
import { WR_Current } from "../story_fragments/wailua-river/WR_Current";

class StoryList extends Component {
  state = {
    story_display: "",
    moolelo: "",
    historical: "",
    current: ""
  };

  toggleShow(fragment) {
    this.setState({
      story_display: fragment
    });
  }

  setStories(location) {
    switch (this.props.activeLocation) {
      case "Wailua-River":
        this.setState({
          moolelo: WR_Moolelo,
          historical: WR_Historical,
          current: WR_Current
        });
        break;
      case "Lydgate":
        this.setState({
          moolelo: L_Moolelo,
          historical: L_Historical,
          current: L_Current
        });
        break;
      case "Wailua-Beach":
        this.setState({
          moolelo: WB_Moolelo,
          historical: WB_Historical,
          current: WB_Current
        });
        break;
      case "Opaekaa":
        this.setState({
          moolelo: O_Moolelo,
          historical: O_Historical,
          current: O_Current
        });
        break;
      case "Fern-Grotto":
        this.setState({
          moolelo: FG_Moolelo,
          historical: FG_Historical,
          current: FG_Current
        });
        break;
      default:
        break;
    }
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ loading: false });
    // }, 1000);

    this.setStories(this.props.activeLocation);

    // this.setState({
    //   currentQuote: this.randomQuote()
    // });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activeLocation !== this.props.activeLocation) {
      this.setStories(this.props.activeLocation);
      this.setState({
        story_display: ""
      });
    }
  }

  render() {
    return (
      <div className="story-container">
        <div className="widget">
          <button
            className="widget"
            onClick={() => this.toggleShow(this.state.moolelo)}
          >
            <h2>Traditional Accounts</h2>
          </button>
          <button
            className="widget"
            onClick={() => this.toggleShow(this.state.historical)}
          >
            <h2>Historical Accounts</h2>
          </button>
          <button
            className="widget"
            onClick={() => this.toggleShow(this.state.current)}
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
