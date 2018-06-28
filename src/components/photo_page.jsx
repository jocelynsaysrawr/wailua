import React, { Component } from "react";
import { photoAction, loadingAction } from "../actions/index";
import { connect } from "react-redux";
import LoadingScreen from "react-loading-screen";
import "../style/photo_page.scss";

class Photos extends Component {
  state = {
    loading: true,
    currentQuote: null
  };

  showPics() {
    const photos = this.props.photos;
    const showPhoto = photos.map((url, id) => {
      return (
        <div key={id} className={"pic"}>
          <img key={id} src={url} alt={"Kauai Pics"} />
          <div className={"picText"}>
            Location: [Lorem ipsum poopsum buttsum] <br />
            <div>Description: [Lorem ipsum poopsum]</div>
          </div>
        </div>
      );
    });
    return showPhoto;
  }

  randomQuote() {
    const quote = this.props.loading[
      Math.floor(Math.random() * this.props.loading.length)
    ];
    return quote;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);

    this.props.photoAction();

    this.setState({
      currentQuote: this.randomQuote()
    });
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        <LoadingScreen
          loading={loading}
          bgColor="#373A46"
          spinnerColor="#9ee5f8"
          textColor="#ffffff"
          logoSrc="http://res.freestockphotos.biz/pictures/15/15939-illustration-of-a-small-cartoon-mountain-pv.png"
          text={this.state.currentQuote}
        >
          {this.showPics()}
        </LoadingScreen>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    photos: state.photos,
    loading: state.loading
  };
}

export default connect(
  mapStateToProps,
  { photoAction, loadingAction }
)(Photos);
