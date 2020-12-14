import React from "react";
import "./counter.css";
import { Typography, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import RemoveIcon from "@material-ui/icons/Remove";
import RemoveRoundedIcon from "@material-ui/icons/RemoveRounded";
import { IconButton } from "@material-ui/core";

const Counter = ({ id, value, onAdd, onSubtract }) => {
  //console.log(`value: ${value}, id: ${id}`);
  return (
    <div className="counter-items">
      {/* <h3>Counter Component</h3> */}
      <Typography
        className="counter-label-typography"
        variant="caption"
        color="textSecondary"
      >
        <div>{value}</div>
      </Typography>
      <IconButton
        size="small"
        className="counter-button counter"
        onClick={() => onAdd(id, value)}
      >
        <AddRoundedIcon />
      </IconButton>
      <IconButton
        size="small"
        className="counter-button counter"
        onClick={() => onSubtract(id, value)}
      >
        <RemoveRoundedIcon />
      </IconButton>
    </div>
  );
};

Counter.defaultProps = {
  counterdefaultValue: 0
};

export default Counter;
