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

  displaySomeText() {
    return <div>hi im some text</div>
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
          <button onClick={this.toggleHidden.bind(this)} >
            Click to show map
          </button>
          <AppFooter />
        </div>
      </div >
    );
  }
}

const Child = () => (
  <div className='modal'>
    Hello, World!
  </div>
)

export default App;
