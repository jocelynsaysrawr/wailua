import React, { Component } from "react";
import { photoAction, loadingAction } from "../actions/index";
import { connect } from "react-redux";
//import LoadingScreen from "react-loading-screen";
import "../style/photo_page.scss";

class Photos extends Component {
  state = {
    loading: true,
    currentQuote: null
  };

  showPics() {
    const photos = this.props.photos;
    const showPhoto = photos.map(
      ({
        photo_id,
        photo_url,
        current_photo_url,
        location,
        description,
        obtained_from
      }) => {
        return (
          <div key={photo_id.S} className={"pic"}>
            <img key={photo_id.S} src={photo_url.S} alt={"Kauai Pics"} />
            {current_photo_url ? (
              <img
                key={photo_id.S + "_current"}
                src={current_photo_url.S}
                alt={"Current Kauai"}
              />
            ) : (
              <p />
            )}
            <div className={"picText"}>
              <p className="photo-p">Location: {location.S}</p>
              <p className="photo-p">Description: {description.S}</p>
              <p className="photo-p">Obtained From: {obtained_from.S}</p>
            </div>
          </div>
        );
      }
    );
    return showPhoto;
  }

  // randomQuote() {
  //   const quote = this.props.loading[
  //     Math.floor(Math.random() * this.props.loading.length)
  //   ];
  //   return quote;
  // }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ loading: false });
    // }, 2000);

    this.props.photoAction(this.props.activeLocation);

    // this.setState({
    //   currentQuote: this.randomQuote()
    // });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activeLocation !== this.props.activeLocation) {
      this.props.photoAction(this.props.activeLocation);
    }
  }

  render() {
    return (
      <div className="photo-container">
        {/* <LoadingScreen
          loading={loading}
          bgColor="#373A46"
          spinnerColor="#9ee5f8"
          textColor="#ffffff"
          logoSrc="http://res.freestockphotos.biz/pictures/15/15939-illustration-of-a-small-cartoon-mountain-pv.png"
          text={this.state.currentQuote}
        /> */}
        {this.showPics()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    photos: state.photos,
    loading: state.loading,
    activeLocation: state.activeLocation
  };
}

export default connect(
  mapStateToProps,
  { photoAction, loadingAction }
)(Photos);
