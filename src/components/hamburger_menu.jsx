import React, { Component } from 'react'
import { stack as Menu } from 'react-burger-menu';

class HamburgerMenu extends Component {

  showSettings(event) {
    event.preventDefault();
  }

  render() {

    return (
      <Menu width={'100%'} right>
        <ul>
          <li>check out</li>
          <li>this list!!</li>
          <li>poopies</li>
        </ul>
      </Menu>
    )
  }
}

export default HamburgerMenu