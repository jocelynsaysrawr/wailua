import React, { Component } from "react";
import PropTypes from "prop-types";

let width = 320;
let height = 0;

let streaming = false;

let canvas = null;
let photo = null;

class Camera extends Component {
  componentDidMount() {
    const { video, audio } = this.props;
    canvas = document.getElementById("canvas");
    photo = document.getElementById("photo");
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

      this.video.addEventListener("canplay", () => {
        if (!streaming) {
          height = this.video.videoHeight / (this.video.videoWidth / width);

          this.video.setAttribute("width", width);
          this.video.setAttribute("height", height);
          canvas.setAttribute("width", width);
          canvas.setAttribute("height", height);
        }
      });
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
        <canvas id="canvas" />
        <img id="photo" alt="The screen capture will appear in this box." />
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
