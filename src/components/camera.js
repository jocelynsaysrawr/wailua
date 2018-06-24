import React, { Component } from "react";

export default class Camera extends Component {
  componentDidMount() {
    const player = this.refs.player;
    const canvas = this.refs.canvas;
    const context = canvas.getContext("2d");
    const constraints = {
      video: true,
      facingMode: "environment"
    };

    console.log(
      "navigator: ",
      navigator.mediaDevices.enumerateDevices().then(data => {
        console.log(data[2]);
      })
    );

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(stream => {
        console.log("steam", stream);
        player.srcObject = stream;
      })
      .then(
        navigator.mediaDevices.enumerateDevices().then(data => {
          console.log("label: ", data[2].label);
        })
      );

    context.drawImage(player, 0, 0, canvas.width, canvas.height);
  }
  takePhoto() {}

  render() {
    return (
      <div>
        <video ref="player" autoPlay />
        <button>Capture</button>
        <canvas ref="canvas" width={320} height={240} />
      </div>
    );
  }
}
