import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu';

class HamburgerMenu extends Component {

  showSettings(event) {
    event.preventDefault();
  }

  render() {

    return (
      <Menu>
        <a className="menu-item" href="/">Location 1</a>
        <a className="menu-item" href="/">Location 2</a>
        <a className="menu-item" href="/">Location 3</a>
        <a className="menu-item" href="/">Location 4</a>
        <a className="menu-item" href="/">Location 5</a>
      </Menu>
    )
  }
}

export default HamburgerMenu