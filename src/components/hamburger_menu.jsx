import React, { Component } from 'react'
import { stack as Menu } from 'react-burger-menu';

class HamburgerMenu extends Component {

  showSettings(event) {
    event.preventDefault();
  }

  render() {

    return (
      <Menu width={'100%'} right>
        <h1>check out</h1>
        <h2>this motherfuckin</h2>
        <h3>list!!!!!</h3>
        <h4>ok...</h4>
        <h5>you can go home now</h5>
      </Menu>
    )
  }
}

export default HamburgerMenu