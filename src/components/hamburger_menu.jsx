import React, { Component } from "react";
import { stack as Menu } from "react-burger-menu";
import NavList from "./nav_list";

class HamburgerMenu extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu width={"100%"} right>
        <NavList />
      </Menu>
    );
  }
}

export default HamburgerMenu;
