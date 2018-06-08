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
    this.toggleHidden = this.toggleHidden.bind(this);
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

        {!this.state.isHidden && <Map />}
        {this.state.isHidden && <NavList />}
        <div className="App-footer">
          <button onClick={this.toggleHidden} >
            Click to show map
          </button>
          <AppFooter toggleHidden={this.toggleHidden} />
        </div>
      </div >
    );
  }
}

export default App;
