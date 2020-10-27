import React from "react";
import Input from "./Input";

const List = ({ list, handleInputList }) => {
  //const { itemId, itemValue, counterdefaultValue } = list;

  const showList = (item, index) => {
    // console.log(`[ List ]
    // itemId : ${item.itemId}`);

    /* Item */
    return (
      <div key={index}>
        <Input
          //key={index}
          value={item.itemValue}
          handleInputList={handleInputList}
          itemId={item.itemId}
        />
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
