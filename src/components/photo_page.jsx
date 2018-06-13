import React, { Component } from "react";
import { photoAction } from '../actions/index';
import { connect } from 'react-redux';

class Photos extends Component {

  handleClick() {
    this.props.photoAction();
  }

  // showPics() {
  //   const array = [1, 2, 3, 4, 5]
  //   let IncreaseByTwo = array.map((num) => {
  //     return <div>{num + 2}</div>
  //   })
  //   return IncreaseByTwo;
  // }

  showPics() {
    const photos = this.props.photos;
    const showPhoto = photos.map((photo) => {
      return <img src={photo} />;
    })
    return showPhoto;
  }

  render() {
    console.log("render", this.props.photos);
    let Pictures = this.props.photos.map((pictures) => {
      return <div>{pictures}</div>
    })

    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>
          Get Photos
        </button>
        {this.showPics()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    photos: state.photos
  }
}

export default connect(mapStateToProps, { photoAction })(Photos);