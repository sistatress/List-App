import React from "react";

const Input = ({ value, handleInput, ...action }) => {
  const saveInputTolist = action.saveInputTolist;
  // const { saveInputTolist } = action.saveInputTolist

  return (
    <div>
      <h2>Input Component</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => handleInput(e.target.value)}
        onKeyPress={(event) => saveInputTolist(event)}
      />
    </div>
  );
};

export default Input;
