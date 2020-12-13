import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";
import "./App.css";
import List from "./Components/List";
import Input from "./Components/Input";
import Counters from "./Components/Counters";
import NavBar from "./Components/NavigationBar";
import { Grid, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

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
      counterValue: 0
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

  const handleAdd = (id, value) => {
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
    console.log(`listItems: ${JSON.stringify(listItems)}`);
    console.log(`newCounterValue: ${newCounterValue}`);
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

  const onDeleteItem = (id) => {
    // Copy of the counters array
    const listItems = [...list];

    // Delete counter
    const newList = listItems.filter((item) => item.itemId !== id);

    // Set counters state
    setList(newList);
  };

  const isList = list.length > 0 ? true : false;
  const classes = useStyles();

  return (
    <div className="App">
      <Grid container spacing={3}>
        {/* Navigation Bar */}
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>left xs=2</Paper>
        </Grid>
        {/* main */}
        <Grid item xs={8}>
          <Grid
            container
            direction="colum"
            justify="center"
            //alignItems="center"
          >
            {isList ? (
              <Grid
                container
                direction="row"
                marginTop="15px"
                justifyContent="space-evenly"
              >
                {/* List */}
                <div className="list-container">
                  <List
                    list={list}
                    handleInputList={updateItemValue}
                    deleteItem={onDeleteItem}
                  />
                </div>
                <div className="counters-container">
                  {/* <Counter label={0} /> */}
                  <Counters
                    list={list}
                    onAdd={handleAdd}
                    onSubtract={subtract}
                  />
                </div>
              </Grid>
            ) : null}

            {/* user-input */}

            <div className="user-input">
              <Input
                value={input}
                handleInput={handleInput}
                saveInputTolist={saveInputTolist}
              />
            </div>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>rigth xs=2</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Footer xs=12</Paper>
        </Grid>
      </Grid>
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
