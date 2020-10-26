import React, { useState } from "react";
import "./styles.css";
import List from "./Components/List";

export default function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const handleInput = (value) => {
    const newInput = value;

    console.log(`[ handleInput ] newInput: ${newInput}`);

    setInput(newInput);
  };

  const saveInputTolist = (event) => {
    const eventComing = event.key;
    //console.log(`[ saveInputTolist 1] event Coming ${eventComing}`);

    // No Enter event
    if (eventComing !== "Enter") {
      return;
    }

    // Enter event
    const eventValue = event.target.value;
    //console.log(`[ saveInputTolist 2] the value of the event ${eventValue}`);

    setList([...list, eventValue]);
    setInput("");
  };

  const handleInputList = (value, index) => {
    const oldList = list;
    oldList[index] = value;
    setList([...oldList]);
  };

  // const updatedInput = input;
  // console.log(`[ Input ] updated input ${updatedInput}`);

  // const updatedList = list;
  // console.log(`[ List ] updated list ${updatedList}`);

  return (
    <div className="App">
      <h1>List-App</h1>
      {/* UserInput : create list items  */}
      <input
        type="text"
        value={input}
        onChange={(e) => handleInput(e.target.value)}
        onKeyPress={(event) => saveInputTolist(event)}
      />
      <br />
      <br />
      {/* Show a list */}
      <List list={list} handleInputList={handleInputList} />
    </div>
  );
}
