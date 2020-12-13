import React from "react";
import "./counter.css";
import { Typography, Grid } from "@material-ui/core";

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
        <div
        // className='counter-value'
        >
          {value}
        </div>
      </Typography>
      <button
        className="counter-button counter"
        onClick={() => onAdd(id, value)}
      >
        +
      </button>
      <button
        className="counter-button counter"
        onClick={() => onSubtract(id, value)}
      >
        -
      </button>
    </div>
  );
};

Counter.defaultProps = {
  counterdefaultValue: 0
};

export default Counter;
