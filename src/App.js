import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";
import "./App.css";
import List from "./Components/List";
import Input from "./Components/Input";
import Counter from "./Components/Counter";

export default function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  /* User Input */

  // handle UserInput
  const handleInput = (value) => {
    const newInput = value;
    setInput(newInput);
  };

  // Add new item to list
  const saveInputTolist = (event) => {
    const eventComing = event.key;
    //console.log(`[ saveInputTolist 1] event Coming ${eventComing}`);

    // No Enter event
    if (eventComing !== "Enter") {
      return;
    }

    // Enter event
    const inputValue = event.target.value;
    const id = uuidv4();
    const item = {
      itemId: id,
      itemValue: inputValue,
      counterdefaultValue: 0
    };

    // Set counters state
    setList([...list, item]);

    // Clear User Input
    setInput("");
  };

  /* Input List */

  // Modify list state value property
  const updateItemValue = (value, id) => {
    //console.log(`id : ${id}`)
    const itemIndex = list.findIndex(
      (itemElement) => itemElement.itemId === id
    );

    //console.log(`itemIndex ${itemIndex}`)
    const listItems = [...list];

    listItems[itemIndex] = { ...listItems[itemIndex], itemValue: value };
    setList([...listItems]);
  };

  return (
    <div className="App">
      <h1 className="app-title">List-App</h1>
      {/* UserInput : create list items  */}
      <div className="user-input">
        <Input
          value={input}
          handleInput={handleInput}
          saveInputTolist={saveInputTolist}
        />
      </div>
      <br />
      <br />
      <div className="container">
        <div className="list-container">
          <List list={list} handleInputList={updateItemValue} />
        </div>
        <div className="counters-container">
          <Counter />
        </div>
      </div>
    </div>
  );
}

// const updateCounter = (id, value, result) => {
//   // Find the counter
//   const counterIndex = counters.findIndex(
//     (counterElement) => counterElement.id === id
//   );
//   // Copy of the counters array
//   const newCounters = [...counters];

//   // Udate the counter value
//   newCounters[counterIndex] = { ...newCounters[counterIndex], value: result };

//   // Set counters state
//   setCounts(newCounters);
// };

// LIST SCHEMA
/*
      
    [{item1}, {item2}, {item3}, ...]
    item1 : [0] item2 : [1], item3 : [2], ...
    
    [
      {itemId : id0, value: inputValue, counterdefaultValue : 0}, // item1 : [0]
      {itemId : id1, value: inputValue, counterValue: defaultValue=0}, // item2 : [1]
      {itemId : id2, value: inputValue, counterValue: defaultValue=0}, // item3 : [2] 
      ...
    ]
  
  */
