import React from "react";
import Input from "./Input";

const List = ({ list, handleInputList }) => {
  const showList = (item, index) => {
    return (
      <div>
        <Input
          key={index}
          value={item}
          handleInputList={handleInputList}
          inputIndex={index}
        />
        <button>x</button>
      </div>
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
