import React from "react";
import Input from "./Input";
// import Counter from "./Counter";

const List = ({ list, handleInputList }) => {
  //const { itemId, itemValue, counterdefaultValue } = list;

  const showList = (item, index) => {
    // console.log(`[ List ]
    // index : ${index}`);
    return (
      <div key={index}>
        {/* list item */}
        <Input
          //key={index}
          value={item.itemValue}
          handleInputList={handleInputList}
          inputIndex={index}
        />
        {/* <Counter key={index}/> */}
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
