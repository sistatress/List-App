import React, { useState } from "react";
import "./styles.css";
import List from "./Components/List";
import Input from "./Components/Input";

export default function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

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

  const saveInputTolist = (event, index) => {
    console.log(` [App | saveInputTolist] 
    index : ${index}`);

    const eventComing = event.key;
    //console.log(`[ saveInputTolist 1] event Coming ${eventComing}`);

    // No Enter event
    if (eventComing !== "Enter") {
      return;
    }

    // Enter event
    const inputValue = event.target.value;
    // const itemIndex = list.findIndex((counterElement) => counterElement.id === index );  // Find Item
    // const newList = [...list];  // List copy
    // newList[itemIndex] = { ...newList[itemIndex], value: inputValue }; // Udate the counter value
    const item = {
      itemId: index,
      itemValue: inputValue,
      counterdefaultValue: 0
    };

    const oldList = [...list]; // List copy

    // Set counters state
    setList([
      ...list,
      { itemId: index, itemValue: inputValue, counterdefaultValue: 0 }
    ]);
    setInput("");

    // ToDO : clear input
  };

  const handleInput = (value) => {
    const newInput = value;

    console.log(`[ App | handleInput ] 
    newInput: ${newInput}`);

    setInput(newInput);
  };

  const handleInputList = (value, index) => {
    const oldList = list;
    oldList[index] = value;
    setList([...oldList]);
  };

  // const updatedInput = input;
  // console.log(`[ Render Input ] updated input ${updatedInput}`);

  const updatedList = list;

  console.log(`[ App | updated Global input list ] 
  updated list : ${updatedList}`);

  return (
    <div className="App">
      <h1>List-App</h1>
      {/* UserInput : create list items  */}
      <Input
        value={input}
        handleInput={handleInput}
        saveInputTolist={saveInputTolist}
      />
      <br />
      <br />
      {/* Show a list */}
      <List list={list} handleInputList={handleInputList} />
    </div>
  );
}
