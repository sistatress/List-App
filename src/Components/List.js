import React from "react";
import Input from "./InputUI";
import "./list.css";
import Counter from "./Counter";
import Item from "./Item";
import DeleteIcon from "@material-ui/icons/Delete";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import { Grid, IconButton } from "@material-ui/core";
import { Transition } from "react-spring/renderprops";
import { config, animated } from "react-spring";
import { useState, useEffect } from "react";

const List = ({ list, handleInputList, deleteItem, onAdd, onSubtract }) => {
  //const { itemId, itemValue, counterdefaultValue } = list;
  const deep = list;
  useEffect(() => {
    const mounted = { current: true };
    if (mounted) {
      console.log(`list mounted`);
    }

    return () => {
      mounted.current = false;
      console.log(`list unmounted!`);
    };
  }, []);

  const showList = (_item, index) => {
    // console.log(`[ List ]
    // itemId : ${item.itemId}`)

    /* Item */
    return (
      <Transition
        //native
        config={config.gentle}
        //duration={2000}
        items={_item}
        keys={(index) => index}
        from={{ opacity: 0, transform: "translate3d(-25%, 0px, 0px)" }}
        enter={{ opacity: 1, transform: "translate3d(0%, 0px, 0px)" }}
        leave={{
          opacity: 1,
          height: 0,
          transform: "translate3d(25%, 0px, 0px)"
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

  return (
    <>
      {/* {list.map(showList)} */}
      {list.map((item, index) => (
        <Item
          _item={item}
          index={index}
          list={list}
          handleInputList={handleInputList}
          deleteItem={deleteItem}
          onAdd={onAdd}
          onSubtract={onSubtract}
        />
      ))}
    </>
  );
};

export default List;
