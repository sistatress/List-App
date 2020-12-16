import React from "react";
import Input from "./InputUI";
import Counter from "./Counter";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import { Grid, IconButton } from "@material-ui/core";
import { useState, useEffect } from "react";
import { animated } from "react-spring";

const Item = ({
  item,
  index,
  style,
  list,
  handleInputList,
  deleteItem,
  onAdd,
  onSubtract
}) => {
  const { itemId, itemValue, counterValue } = item;

  useEffect(() => {
    const mounted = { current: true };
    if (mounted) {
      console.log(`item mounted`);
      console.log(`_item props: ${JSON.stringify(item)}`);
      console.log(`
        itemID: ${itemId}
        itemValue: ${itemValue}
        counterValue: ${counterValue}
      `);
    }

    return () => {
      mounted.current = false;
      console.log(`item unmounted!`);
    };
  }, [item]);

  return (
    <animated.div key={index} style={style}>
      <div className="list-items">
        <Grid
          container
          direction="row"
          spacing={2}
          className="grid-list-container"
        >
          <Grid item xs={7}>
            <Input
              value={itemValue}
              handleInputList={handleInputList}
              itemId={itemId}
              className="input-items"
            />
          </Grid>
          <Grid item xs={4}>
            <Counter
              id={itemId}
              list={list}
              onAdd={onAdd}
              onSubtract={onSubtract}
              value={counterValue}
            />
          </Grid>
          <Grid item xs={1} className="grid-item-delete-button">
            <IconButton
              color="secondary"
              size="small"
              aria-label="delete"
              className="delete-button"
              onClick={() => deleteItem(itemId)}
            >
              <DeleteRoundedIcon />
            </IconButton>
          </Grid>
        </Grid>
      </div>
    </animated.div>
  );
};

export default Item;
