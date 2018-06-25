import React, { Component } from "react";
import { connect } from "react-redux";
import { loadGame, authenticate, setImage } from "../actions/index";
import { Auth } from "aws-amplify";
import requireAuth from "../components/require_auth";
import Camera from "../components/camera";
import config from "../config";

import "../style/game.scss";

import AWS from "aws-sdk";
const rekognition = new AWS.Rekognition({
  region: "us-west-2",
  accessKeyId: config.credentials.accessKeyId,
  secretAccessKey: config.credentials.secretKeyId
});

class Game extends Component {
  constructor(props) {
    super(props);
    this.takePicture = this.takePicture.bind(this);

    this.state = {
      labels: null,
      Labels: null
    };
  }

  takePicture() {
    this.camera.capture().then(blob => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      const self = this;
      reader.onloadend = function() {
        function getBinary(encodedFile) {
          var base64Image = encodedFile.split("data:image/jpeg;base64,")[1];
          var binaryImg = atob(base64Image);
          var length = binaryImg.length;
          var ab = new ArrayBuffer(length);
          var ua = new Uint8Array(ab);
          for (var i = 0; i < length; i++) {
            ua[i] = binaryImg.charCodeAt(i);
          }
          var blob = new Blob([ab], {
            type: "image/jpeg"
          });
          return ab;
        }
        const params = {
          Image: {
            Bytes: getBinary(reader.result)
          },
          MaxLabels: 123,
          MinConfidence: 0.0
        };

        rekognition.detectLabels(params, (err, data) => {
          if (err) {
            console.log(err, err.stack);
          } else {
            console.log(data.Labels);
            self.setState({ labels: data.Labels });
          }
        });
      };

      this.img.src = URL.createObjectURL(blob);
      this.props.setImage(this.img.src);
      console.log("current image: ", this.props.image);
      this.img.onload = () => {
        URL.revokeObjectURL(this.src);
      };
    });
  }

  async componentDidMount() {
    try {
      if (await Auth.currentSession()) {
        this.props.authenticate(true);
      }
    } catch (e) {
      if (e !== "No current user") {
        alert(e);
      }
    }
    this.props.loadGame(false);
  }

  render() {
    return (
      !this.props.isAuthenticating && (
        <div>
          <div className="camera">
            <Camera
              ref={cam => {
                this.camera = cam;
              }}
            />
          </div>

          <button onClick={this.takePicture}>Click</button>
          {this.state.labels ? (
            <p>{this.state.labels.map(obj => obj.Name)}</p>
          ) : (
            <p />
          )}
          <div className="photo">
            <img
              alt=""
              ref={img => {
                this.img = img;
              }}
            />
          </div>
        </div>
      )
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.authenticated,
    isAuthenticating: state.isAuthenticating,
    image: state.image
  };
};

export default connect(
  mapStateToProps,
  { loadGame, authenticate, setImage }
)(requireAuth(Game));
