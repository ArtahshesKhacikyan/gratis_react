import React from "react";
import { fallDown as Menu } from "react-burger-menu";

class PhotoControl extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
        <Menu pageWrapId='page-wrap'>
          
        </Menu>
    );
  }
}

export default PhotoControl;
