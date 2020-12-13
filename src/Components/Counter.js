import React from "react";
// import PropTypes from "prop-types";
import "./counter.css";
import {
  Typography,
  Grid
} from "@material-ui/core";
const Counter = ({ id, value, onAdd, onSubtract }) => {
  //console.log(`value: ${value}, id: ${id}`);
  return (
    <Grid
      container
      direction="colum"
      justify="center"
      className="item"
    >
      {/* <div className="item"> */}
        {/* <h3>Counter Component</h3> */}
        <Typography 
          className="counter-label" 
          variant="caption" 
          color="textSecondary"
          >
          <div className='counter-label'>{value}</div>
        </Typography>
        {/* <label className="counter-label">{value}</label> */}
        <button className="counter-button counter" onClick={() => onAdd(id, value)}>
          +
        </button>
        <button className="counter-button counter" onClick={() => onSubtract(id, value)}>
          -
        </button>

        {/* <h2>{value}</h2>
        <button onClick={() => onSubtract(id, value)}>-</button>
        <button onClick={() => onAdd(id, value)}>+</button>
        <br />
        <button onClick={() => onDelete(id)}>Delete Counter</button> */}
      {/* </div> */}
    </Grid>
  );
};

Counter.defaultProps = {
  counterdefaultValue: 0
};

export default Counter;
// id, value, onAdd, onSubtract, onDelete
