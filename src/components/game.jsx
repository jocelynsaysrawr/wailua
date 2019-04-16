import React, { Component } from "react";
import { connect } from "react-redux";
import {
  loadGame,
  authenticate,
  setImage,
  getTranslation,
  signout
} from "../actions/index";
// import { Auth } from "aws-amplify";
// import requireAuth from "../components/require_auth";
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
    this.newPhoto = this.newPhoto.bind(this);
    this.translate = this.newPhoto.bind(this);

    this.state = {
      labels: [],
      welcome:
        "Click on the camera to take a photo and learn some Hawaiian words!"
    };
  }

  takePicture() {
    console.log("camera: ", this.camera);
    this.camera.capture().then(blob => {
      console.log("blog: ", blob);
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
            console.log("data: ", data.Labels);
            // return data.Labels.map(obj => {
            //   const state = self.state.labels;
            //   self.setState({
            //     labels: [...state, obj.Name]
            //   });
            //   console.log("new state: ", state);
            // });
            return data.Labels.map(obj => {
              self.props.getTranslation(obj.Name.toLowerCase()).then(data => {
                if (data.payload.data.Item) {
                  console.log(
                    `${data.payload.data.Item.english.S}: ${
                      data.payload.data.Item.hawaiian.S
                    }`
                  );
                  const state = self.state.labels;
                  self.setState({
                    labels: [
                      ...state,
                      {
                        english: data.payload.data.Item.english.S,
                        hawaiian: data.payload.data.Item.hawaiian.S
                      }
                    ]
                  });
                  console.log("state: ", self.state);
                }
              });
            });
          }
        });
      };

      this.img.src = URL.createObjectURL(blob);
      this.props.setImage(true);
      console.log("current image: ", this.img);
      this.img.onload = () => {
        URL.revokeObjectURL(this.src);
      };
    });
  }

  renderScreen() {
    if (!this.props.image) {
      return (
        <div className="camera">
          <Camera
            ref={cam => {
              this.camera = cam;
            }}
          />

          <button className="btn-camera" onClick={this.takePicture}>
            <i className="fa fa-camera">{""}</i>
          </button>
          {!this.props.image ? (
            <p className="message">{this.state.welcome}</p>
          ) : (
            <p />
          )}
        </div>
      );
    }
  }

  newPhoto() {
    this.props.setImage(false);
    this.img.src = "";
    this.setState({ labels: [] });
  }

  // async componentDidMount() {
  //   try {
  //     if (await Auth.currentSession()) {
  //       this.props.authenticate(true);
  //     }
  //   } catch (e) {
  //     if (e !== "No current user") {
  //       alert(e);
  //     }
  //   }
  // }

  translate() {
    if (this.state.labels) {
      this.state.labels.map(obj => {
        // console.log(
        //   "translate: ",
        //   this.props.getTranslation(obj.Name.toLowerCase())
        // );
        return this.props.getTranslation(obj.Name.toLowerCase());
      });
    }
  }

  render() {
    return (
      <div className="game-container">
        {this.renderScreen()}
        <div className="camera">
          <img
            className="photo"
            alt=""
            ref={img => {
              this.img = img;
            }}
          />
          {this.state.labels ? (
            <ul className="translate">
              {this.state.labels.map(obj => (
                <li key={obj.english}>
                  <em className="english">{obj.english}:</em> {obj.hawaiian}
                </li>
              ))}
              {/*{this.state.labels.map(word => <li key={word}>{word}</li>)}*/}
            </ul>
          ) : (
            <p />
          )}
          {this.state.message ? <h3>{this.state.message}</h3> : <p />}
          {this.props.image ? (
            <button className="btn-camera-new" onClick={this.newPhoto}>
              <i className="fa fa-camera">{""}</i>
            </button>
          ) : (
            <p />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.authenticated,
    hasImage: state.hasImage,
    image: state.image,
    translation: state.translation
  };
};

export default connect(
  mapStateToProps,
  { loadGame, authenticate, setImage, getTranslation, signout }
)(Game);

// {!this.props.image ? (
//   <button className="btn-signout" onClick={this.props.signout}>
//     Sign Out
//   </button>
// ) : (
//   <p />
// )}

// {this.props.image ? (
//   <button className="btn-signout" onClick={this.props.signout}>
//     Sign Out
//   </button>
// ) : (
//   <p />
// )}
