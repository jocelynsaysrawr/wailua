import React, { Component } from "react";
import "./App.css";
import Map from "./components/map";
import { loadingAction } from "./actions/index";
import { connect } from "react-redux";
// import LoadingScreen from "react-loading-screen";
import ModalParent from "./components/modal_parent";

class App extends Component {
  state = {
    loading: true,
    currentQuote: null
  };

  randomQuote() {
    const quote = this.props.loading[
      Math.floor(Math.random() * this.props.loading.length)
    ];
    return quote;
  }

  // componentWillMount() {
  //   setTimeout(() => {
  //     this.setState({ loading: false });
  //   }, 3000);

  //   this.setState({
  //     currentQuote: this.randomQuote()
  //   });
  // }
  render() {

    return (
      <div className="App">

          <Map />
          
          <ModalParent />
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loading
  };
}

export default connect(
  mapStateToProps,
  { loadingAction }
)(App);
