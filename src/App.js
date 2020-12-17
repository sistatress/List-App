import React from "react";
// import { v4 as uuidv4 } from "uuid";
import "./styles.css";
import "./App.css";
import List from "./Components/List";
import InputUI from "./Components/InputUI";
import NavBar from "./Components/NavigationBar";
import { Grid } from "@material-ui/core";
import useList from './useList';
import useInput from "./useInput";
import useCounter from './useCounter';

export default function App() {
  // const [list, setList] = useState([]);
  // const [input, setInput] = useState("");
  
  const { 
    list, 
    createItem, 
    updateItem, 
    deleteItem, 
  } = useList();

  const {decrementCounter,incrementCounter } = useCounter();

  const {input, handleInput} = useInput();
  
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
                decrementCounter={decrementCounter}
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


