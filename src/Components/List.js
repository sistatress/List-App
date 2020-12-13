import React from "react";
import Input from "./Input";
import "./list.css";
import Counter from "./Counter";
import { Grid } from "@material-ui/core"; 

const List = ({ list, handleInputList, deleteItem, onAdd, onSubtract }) => {
  //const { itemId, itemValue, counterdefaultValue } = list;

  const showList = (item, index) => {
    // console.log(`[ List ]
    // itemId : ${item.itemId}`);

    /* Item */
    return (
      <div key={index} className="list-items">
        <Grid
            container
            direction="row"
            justify="center"
          >
        <Input
          //key={index}
          value={item.itemValue}
          handleInputList={handleInputList}
          itemId={item.itemId}
          className='input-items'
        />
        <Counter
          id={item.itemId}
          list={list}
          onAdd={onAdd}
          onSubtract={onSubtract}
          value={item.counterValue}
        />
        <button
          className="delete-button"
          onClick={() => deleteItem(item.itemId)}
        >
          x
        </button>
        </Grid>
      </div>
    );
  };

  return (
    <>
      {/* <h3>List Component</h3> */}
      {list.map(showList)}
    </>
  );
};

export default List;
