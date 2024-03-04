import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Alert from "./components/Alert";
import Textform from "./components/Textform";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const light = () => {
    setMode("light");
    document.body.style.backgroundColor = "white";
    showAlert("Light mode has been enabled", "success");
    document.title = "TextUtila - Light";
    setTimeout(() => {
      document.title = "TextUtila is amazing";
    }, 2000);

    setTimeout(() => {
      document.title = "Install TextUtila Now";
    }, 1500);
  };

  const red = () => {
    setMode("dark");
    document.body.style.backgroundColor = "#8b0000";
    showAlert("Reddish Dark mode has been enabled", "success");
    document.title = "TextUtila - Red";
  };
  const blue = () => {
    setMode("dark");
    document.body.style.backgroundColor = "#00008b";
    showAlert("Bluish Dark mode has been enabled", "success");
    document.title = "TextUtila - Blue";
  };
  const green = () => {
    setMode("dark");
    document.body.style.backgroundColor = "#023020";
    showAlert("Greenish Dark mode has been enabled", "success");
    document.title = "TextUtila - Green";
  };

 
  return (
    <>
  <Navbar
            title="VS"
            mode={mode}
            red={red}
            green={green}
            blue={blue}
            light={light}
          />
          <Alert alert={alert} />
          <Textform heading="myTextUtila" showAlert={showAlert} mode={mode} />

    </>
  );
}

export default App;
