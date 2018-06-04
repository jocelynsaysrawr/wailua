import React, { Component } from "react";
import AppHeader from "./components/header";
import AppFooter from "./components/footer";
import NavList from "./components/nav_list";
import "./App.css";
import Map from "./components/map";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    }
    this.toggleHidden.bind(this);
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppHeader />
        </header>

        <button onClick={this.toggleHidden.bind(this)} >
          Click to show map
        </button>
        {!this.state.isHidden && <Map />}
        {this.state.isHidden && <NavList />}
        <div className="App-footer">
          <AppFooter />
        </div>
      </div >
    );
  }
}

export default App;
