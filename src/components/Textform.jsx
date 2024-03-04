import React, { useState } from "react";
import Highlighter from "react-highlight-words";
function Textform(props) {
  const [text, setText] = useState("");
  const [Original, setOriginal] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value); // for taking textarea's value
    setOriginal(e.target.value);
    
  };
  const handleUpper = () => {
    setText(text.toUpperCase());
    props.showAlert("Text was converted to UPPER CASE", "success");
  };
  const handleLower = () => {
    setText(text.toLowerCase());
    props.showAlert("Text was converted to lower case", "success");
  };
  const handleClear = () => {
    setText("");
    props.showAlert("Text was cleared", "success");
  };
  const handleReverseChar = () => {
    setText(text.split("").reverse().join(""));
    props.showAlert("Characters were reversed", "success");
  };
  const handleReverseWords = () => {
    setText(text.split(" ").reverse().join(" "));
    props.showAlert("Words were reversed", "success");
  };
  const handleOriginal = () => {
    setText(Original);
    props.showAlert("Original Text returned", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Copied");
    props.showAlert("Text was copied", "success");
  };

  // console.log(text.split(" ").length-1)
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className={`mb-3`}>
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            className="form-control"
            id="myBox"
            rows="7"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter your valuable text here"
          ></textarea>

          <button onClick={handleUpper} disabled={text.length === 0} className="btn btn-primary my-4 mx-3">
            UPPER CASE
          </button>
          <button className="btn btn-primary my-4 mx-3"disabled={text.length === 0} onClick={handleLower}>
            lower case
          </button>
          <button className="btn btn-primary my-4 mx-3"disabled={text.length === 0} onClick={handleClear}>
            Clear Text
          </button>
          <button
            className="btn btn-primary my-4 mx-3 "
            onClick={handleReverseWords}disabled={text.length === 0}
          >
            Reverse words
          </button>
          <button
            className="btn btn-primary my-4 mx-3"
            onClick={handleReverseChar}disabled={text.length === 0}
          >
            Reverse Characters
          </button>
          <button
            className="btn btn-primary my-4 mx-3"
            onClick={handleOriginal} disabled={text.length === 0 || text === Original}
          >
            Original Text
          </button>
        </div>

        <div className="container">
          <h1>Your Text Summary</h1>
          <p>
            {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}
            Words
          </p>
          <p>{text.split("").length}Characters</p>
          <h4>
            {text.split(" ").length * 0.008} minutes required to read (AVERAGE)
          </h4>

          <h2>Preview Text</h2>
          <p>
            {text === ""
              ? "Nothing to preview"
              : text}
          </p>
          <button className=" btn btn-primary my-4 mx-3" onClick={handleCopy}>
            Clipboard
          </button>
        </div>
      </div>
    </>
  );
}
export default Textform;
  