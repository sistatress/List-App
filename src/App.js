import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";
import "./App.css";
import List from "./Components/List";
import InputUI from "./Components/InputUI";
import NavBar from "./Components/NavigationBar";
import { Grid } from "@material-ui/core";

export default function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  /* User Input */

  // handle UserInput
  const handleInput = (value) => {
    const newInput = value;
    setInput(newInput);
  };

  /***************** handle input items in List ****************/

  // Create a new item
  const createItem = (event) => {
    console.log(`listItems: ${JSON.stringify(list)}`);
    const eventComing = event.key;
    //console.log(`[ createItem 1] event Coming ${eventComing}`);

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
      counterValue: 0
    };

    // Set counters state
    setList([...list, item]);

    // Clear User Input
    setInput("");
  };

  // Update item's input
  const updateItem = (value, id) => {
    //console.log(`id : ${id}`)
    const itemIndex = list.findIndex(
      (itemElement) => itemElement.itemId === id
    );

    //console.log(`itemIndex ${itemIndex}`)
    const listItems = [...list];

    listItems[itemIndex] = { ...listItems[itemIndex], itemValue: value };
    setList([...listItems]);
  };

  // delete item
  const deleteItem = (id) => {
    // Copy of the counters array
    const listItems = [...list];

    // Delete counter
    const newList = listItems.filter((item) => item.itemId !== id);

    // Set counters state
    setList(newList);
  };

  /***************** /handle input items in List ****************/

  /***************** handle items'Counter in List ****************/

  const incrementCounter = (id, value) => {
    //console.log(`value: ${value} Id: ${id}`);
    const itemIndex = list.findIndex(
      (itemElement) => itemElement.itemId === id
    );

    const listItems = [...list];
    const newCounterValue = value + 1;

    listItems[itemIndex] = {
      ...listItems[itemIndex],
      counterValue: newCounterValue
    };
    //console.log(`listItems: ${JSON.stringify(listItems)}`);
    //console.log(`newCounterValue: ${newCounterValue}`);
    setList([...listItems]);
  };

  const subtract = (id, value) => {
    //console.log(`value: ${value} Id: ${id}`);
    const itemIndex = list.findIndex(
      (itemElement) => itemElement.itemId === id
    );

    const listItems = [...list];
    const newCounterValue = --value;

    listItems[itemIndex] = {
      ...listItems[itemIndex],
      counterValue: newCounterValue
    };
    console.log(`listItems: ${JSON.stringify(listItems)}`);
    console.log(`newCounterValue: ${newCounterValue}`);
    setList([...listItems]);
  };

  /***************** handle items'Counter in List ****************/

  const isList = list.length > 0 ? true : false;
  //console.log(`listItems: ${JSON.stringify(list)}`);

  return (
    <div className="App">
      <Grid container spacing={3}>
        {/* Navigation Bar */}
        <Grid item xs={12}>
          <NavBar />
        </Grid>

        <Grid className="main-grid" item={false} lg={12}>
          <Grid container direction="column" justify="space-between">
            {isList && (
              <List
                isList={isList}
                list={list}
                updateItem={updateItem}
                deleteItem={deleteItem}
                incrementCounter={incrementCounter}
                onSubtract={subtract}
              />
            )}
          </Grid>
          {/* user-input */}
          <Grid item lg={8}>
            <div className="user-input">
              <InputUI
                value={input}
                handleInput={handleInput}
                createItem={createItem}
              />
            </div>
          </Grid>
        </Grid>
        {/* <Grid item xs={1}>
          <Paper className={classes.paper}>rigth xs=2</Paper>
        </Grid> */}
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>Footer xs=12</Paper>
        </Grid> */}
      </Grid>
    </div>
  );
}

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
