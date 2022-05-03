import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Conteudo from "./Components/Conteudo/Conteudo";
import Header from "./Components/header/header";
import { faMoon as SolidMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon as RegularMoon } from "@fortawesome/free-regular-svg-icons";
function App() {
  const Modes = [
    {
      backgroundColorFull: "#eeeeee",

      general: { backgroundColor: "white", color: "black" },
    },

    {
      backgroundColorFull: "#202D36",
      general: { backgroundColor: "#2B3743", color: "white" },
    },
  ];
  const [MoonIcon, setIcon] = useState(RegularMoon);
  const [Mode, setMode] = useState(0);
  document.getElementById("root").style.backgroundColor =
    Modes[Mode].backgroundColorFull;
  function DarkLightEffect() {
    if (Mode === 0) {
      setIcon(SolidMoon)
      setMode(1);
      return Mode;
    } else if (Mode === 1) {
      setIcon(RegularMoon)
      setMode(0);
      return Mode;
    }
  }

  return (
    <div className="App">
      <Router>
        <Header Icon={MoonIcon} Mode={Modes[Mode].general} DarkLightEffect={DarkLightEffect} />
        <Conteudo Mode={Modes[Mode]} />
      </Router>
    </div>
  );
}

export default App;
