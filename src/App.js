import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import About from "./components/About";
import React, { useState } from "react";

function App() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btntext, setBtntext] = useState("enable dark mode");
  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtntext("Enable Dark mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtntext("Enable Light mode");
    }
  };
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" />
      <button
        type="button"
        onClick={toggleStyle}
        className="btn btn-primary m-2"
      >
        {btntext}
      </button>
      <div className="container" style={myStyle}>
        <TextArea heading="Enter your Text here" />
        <About />
      </div>
    </>
  );
}

export default App;
