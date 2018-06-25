import React, { Component } from "react";
import PropTypes from "prop-types";

class Camera extends Component {
  componentWillMount() {
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
          this.video.play();
        })
        .catch(error => error);
    }
  }

  capture() {
    const mediaStreamTrack = this.state.mediaStream.getVideoTracks()[0];
    const imageCapture = new window.ImageCapture(mediaStreamTrack);

    return imageCapture.takePhoto();
  }

  render() {
    console.log("props: ", this.props);
    return (
      <div style={this.props.style}>
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
  video: PropTypes.bool,
  children: PropTypes.element,
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Camera.defaultProps = {
  audio: false,
  video: {
    facingMode: "environment"
  },
  style: {},
  children: null
};

export default Camera;
