import React, { useEffect } from "react";
import "./counter.css";

const Counter = ({ id, value, onAdd, onSubtract, onDelete }) => {
  useEffect(() => {
    // console.log(`Counter Effect id ${id}`);
  }, [value, id]);

  // console.log(`Counter render`);

  return (
    <div>
      <h3>Counter Component</h3>
      <label className="counter-label">0</label>
      <button className="counter">+</button>
      <button className="counter">-</button>
      {/* <h2>{value}</h2>
      <button onClick={() => onSubtract(id, value)}>-</button>
      <button onClick={() => onAdd(id, value)}>+</button>
      <br />
      <button onClick={() => onDelete(id)}>Delete Counter</button> */}
    </div>
  );
};

export default Counter;
