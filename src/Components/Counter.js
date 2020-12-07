import React from "react";
// import PropTypes from "prop-types";
import "./counter.css";

const Counter = ({ id, value, onAdd, onSubtract }) => {
  //console.log(`value: ${value}, id: ${id}`);
  return (
    <div className="item">
      {/* <h3>Counter Component</h3> */}
      <label className="counter-label">{value}</label>
      <button className="counter" onClick={() => onAdd(id, value)}>
        +
      </button>
      <button className="counter" onClick={() => onSubtract(id, value)}>
        -
      </button>

      {/* <h2>{value}</h2>
      <button onClick={() => onSubtract(id, value)}>-</button>
      <button onClick={() => onAdd(id, value)}>+</button>
      <br />
      <button onClick={() => onDelete(id)}>Delete Counter</button> */}
    </div>
  );
};

Counter.defaultProps = {
  counterdefaultValue: 0
};

export default Counter;
// id, value, onAdd, onSubtract, onDelete
