import React from "react";
import Input from "./Input";
import "./list.css";

const List = ({ list, handleInputList }) => {
  //const { itemId, itemValue, counterdefaultValue } = list;

  const showList = (item, index) => {
    // console.log(`[ List ]
    // itemId : ${item.itemId}`);

    /* Item */
    return (
      <div key={index} className="item">
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
    <>
      <h3>List Component</h3>
      {list.map(showList)}
    </>
  );
};

export default List;
