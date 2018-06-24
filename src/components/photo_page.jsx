import React, { Component } from "react";
import { photoAction, loadingAction } from '../actions/index';
import { connect } from 'react-redux';
import LoadingScreen from 'react-loading-screen';

class Photos extends Component {
  state = {
    loading: true,
    arrayQuote: [
      "sharkpoopadoop",
      "did u finda da ainaa??",
      "you win da million dollahs!!!!",
      "mahalo means trash",
      "aloha for errrrrone",
      "graduation is nigh",
      "science you",
      "add it to the blockchain!!!!!"
    ],
    currentQuote: null
  }

  showPics() {
    const photos = this.props.photos;
    const showPhoto = photos.map((photo, id) => {
      return <div key={id} className={"pic"}><img key={id} src={photo} alt={"Kauai Pics"} /><div className={"picText"}>Location: Lorem ipsum poopsum buttsum</div></div>;
    })
    return showPhoto;
  }

  randomNumber() {
    const number = Math.floor(Math.random() * 8);
    return number;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 1500);

    this.setState({
      currentQuote: this.state.arrayQuote[Math.floor(Math.random() * 8)]
    })

    this.props.photoAction();
  }

  render() {
    console.log(this.props.loading);
    const { loading } = this.state;
    const number = Math.floor(Math.random() * 8);
    return (
      <div>
        <LoadingScreen
          loading={loading}
          bgColor='#373A46'
          spinnerColor='#9ee5f8'
          textColor='#ffffff'
          logoSrc='https://cdn0.iconfinder.com/data/icons/smiley-10/100/Poop-512.png'
          text={this.state.currentQuote}>
          {this.showPics()}
        </LoadingScreen>
      </div >
    )
  }
}

function mapStateToProps(state) {
  return {
    photos: state.photos,
    loading: state.loading
  }
}

export default connect(mapStateToProps, { photoAction, loadingAction })(Photos);