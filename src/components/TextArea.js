import React, { useState } from "react";

export default function TextArea(props) {
  const handleUpCase = () => {
    // console.log("you have clicked on upper case botton" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearCase = () => {
    let newText = "";
    setText(newText);
  };
  // const sentencesCount = () => {
  //   let sentences = text.split(/[.?!]\s+/);
  //   return sentences.length;
  // };

  const handleOnChange = (e) => {
    console.log("on change");
    setText(e.target.value);
  };

  const [text, setText] = useState("Enter your Text here");

  return (
    <>
      <div className="container">
        <h1 className="my-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            value={text}
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpCase}>
          Convert to upercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLoCase}>
          Convert to LOWERCASE
        </button>
        <button className="btn btn-primary mx-3" onClick={handleClearCase}>
          Reset
        </button>
      </div>
      <div className="container">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} character
        </p>
        <p></p>

        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
