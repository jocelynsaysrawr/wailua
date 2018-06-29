import React, { Component } from "react";
import PropTypes from "prop-types";

class Camera extends Component {
  componentDidMount() {
    const { video, audio } = this.props;
    if (navigator.mediaDevices) {
      navigator.mediaDevices
        .getUserMedia({
          video,
          audio
        })
        .then(mediaStream => {
          this.setState({ mediaStream });
          this.video.srcObject = mediaStream;
          // this.video.setAttribute("playsInline", true);
          // this.video.setAttribute("controls", true);
          // this.video.setAttribute("autoPlay", true);
          // setTimeout(() => {
          //   this.video.removeAttribute("controls");
          // });
          // console.log("video ", this.video);
          this.video.play();
        })
        .catch(error => error);
    }
  }

  capture() {
    console.log("mediaStream: ", this.state.mediaStream);
    const mediaStreamTrack = this.state.mediaStream.getVideoTracks()[0];
    const imageCapture = new window.ImageCapture(mediaStreamTrack);

    return imageCapture.takePhoto();
  }

  componentWillUnmount() {
    if (this.state && this.state.mediaStream) {
      let stream = this.state.mediaStream;
      let tracks = stream.getTracks();

      tracks.forEach(track => track.stop());
      this.video.srcObject = null;
    }
  }

  render() {
    console.log("props: ", this.props);
    return (
      <div className="photo">
        {this.props.children}
        <video
          ref={video => {
            this.video = video;
          }}
        />
      </div>
    );
  }
}

Camera.propTypes = {
  audio: PropTypes.bool,
  video: PropTypes.object,
  children: PropTypes.element
};

Camera.defaultProps = {
  audio: false,
  video: {
    facingMode: "environment"
  },
  children: null
};

export default Camera;
