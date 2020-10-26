import React, { useEffect } from "react";

const Counter = ({ id, value, onAdd, onSubtract, onDelete }) => {
  useEffect(() => {
    // console.log(`Counter Effect id ${id}`);
  }, [value, id]);

  // console.log(`Counter render`);

  return (
    <div>
      {/* <h1>Counter Component</h1> */}
      <h2>{value}</h2>
      <button onClick={() => onSubtract(id, value)}>-</button>
      <button onClick={() => onAdd(id, value)}>+</button>
      <br />
      <button onClick={() => onDelete(id)}>Delete Counter</button>
    </div>
  );
};

export default Counter;
