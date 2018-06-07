import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu';

class HamburgerMenu extends Component {

  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu>
        <a href="/">Location 1</a>
        <a href="/">Location 2</a>
        <a href="/">Location 3</a>
        <a href="/">Location 4</a>
        <a href="/">Location 5</a>
      </Menu>
    )
  }
}

export default HamburgerMenu