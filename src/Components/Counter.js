import React from "react";
import PropTypes from "prop-types";
import "./counter.css";

const Counter = ({ id, label, value, onAdd, onSubtract }) => {
  //console.log(`value: ${value}, id: ${id}`);
  return (
    <>
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
    </>
  );
};

Counter.defaultProps = {
  label: "nul",
  counterdefaultValue: 0
};

Counter.prototype = {
  label: PropTypes.string.isRequired
};

export default Counter;
// id, value, onAdd, onSubtract, onDelete
