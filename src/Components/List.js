import React from "react";
import Input from "./InputUI";
import "./list.css";
import Counter from "./Counter";
import DeleteIcon from "@material-ui/icons/Delete";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import { Grid, IconButton } from "@material-ui/core";

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
          spacing={2}
          className="grid-list-container"
        >
          <Grid item xs={7}>
            <Input
              //key={index}
              value={item.itemValue}
              handleInputList={handleInputList}
              itemId={item.itemId}
              className="input-items"
            />
          </Grid>
          <Grid item xs={4}>
            <Counter
              id={item.itemId}
              list={list}
              onAdd={onAdd}
              onSubtract={onSubtract}
              value={item.counterValue}
            />
          </Grid>
          <Grid item xs={1} className="grid-item-delete-button">
            <IconButton
              color="secondary"
              size="small"
              aria-label="delete"
              className="delete-button"
              onClick={() => deleteItem(item.itemId)}
            >
              <DeleteRoundedIcon />
            </IconButton>
          </Grid>
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
