import React from "react";
import Input from "./InputUI";
import Counter from "./Counter";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import { Grid, IconButton } from "@material-ui/core";
import { Transition } from "react-spring/renderprops";
import { config } from "react-spring";
import { useState, useEffect } from "react";

const Item = ({
  _item,
  index,
  list,
  handleInputList,
  deleteItem,
  onAdd,
  onSubtract
}) => {
  const deep = list;

  useEffect(() => {
    const mounted = { current: true };

    if (mounted) {
      console.log(`item mounted`);
    }

    return () => {
      mounted.current = false;
      console.log(`item unmounted!`);
    };
  }, []);

  return (
    <Transition
      reset
      config={config.gentle}
      //duration={2000}
      items={_item}
      keys={(index) => index}
      from={{ opacity: 0, transform: "translateY(-10px)" }}
      enter={{ opacity: 1, transform: "translateY(0)" }}
      leave={{
        opacity: 0,
        height: 0,
        transform: "translateY(10px)"
      }}
    >
      {(item) => (props) => (
        <div style={props}>
          <div className="list-items">
            <Grid
              container
              direction="row"
              spacing={2}
              className="grid-list-container"
            >
              <Grid item xs={7}>
                <Input
                  key={index}
                  value={_item.itemValue}
                  handleInputList={handleInputList}
                  itemId={_item.itemId}
                  className="input-items"
                />
              </Grid>
              <Grid item xs={4}>
                <Counter
                  id={_item.itemId}
                  list={list}
                  onAdd={onAdd}
                  onSubtract={onSubtract}
                  value={_item.counterValue}
                />
              </Grid>
              <Grid item xs={1} className="grid-item-delete-button">
                <IconButton
                  color="secondary"
                  size="small"
                  aria-label="delete"
                  className="delete-button"
                  onClick={() => deleteItem(_item.itemId)}
                >
                  <DeleteRoundedIcon />
                </IconButton>
              </Grid>
            </Grid>
          </div>
        </div>
      )}
    </Transition>
  );
};

export default Item;
