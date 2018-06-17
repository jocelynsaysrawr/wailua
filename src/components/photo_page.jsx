import React, { Component } from "react";
import { photoAction } from '../actions/index';
import { connect } from 'react-redux';

class Photos extends Component {

  showPics() {
    const photos = this.props.photos;
    const showPhoto = photos.map((photo, id) => {
      return <div key={id} className={"pic"}><img key={id} src={photo} alt={"Kauai Pics"} /><div className={"picText"}>Location: Lorem ipsum poopsum buttsum</div></div>;
    })
    return showPhoto;
  }

  componentWillMount() {
    this.props.photoAction();
  }

  render() {
    return (
      <div>
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