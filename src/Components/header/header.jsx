import React, { useState } from "react";
import "./header.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function Header(props) {

  return (
    <div className="Header" style={props.Mode}>
      <h1 >Where in the world?</h1>
      <button  style={props.Mode} onClick={props.DarkLightEffect
    }>
      <FontAwesomeIcon  icon={props.Icon} />
        Dark Mode
      </button>
    </div>
  );
}

export default Header;
