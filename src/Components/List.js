import React from "react";

const List = ({ list, handleInputList }) => {
  const showList = (item, index) => {
    return (
      <li key={index}>
        <input
          type="text"
          value={item}
          onChange={(e) => handleInputList(e.target.value, index)}
        />
        <button>x</button>
      </li>
    );
  };

  return (
    <div>
      <h1>List Component</h1>
      {list.map(showList)}
    </div>
  );
};

export default List;
