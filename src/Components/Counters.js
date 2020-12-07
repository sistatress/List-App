import React from "react";
import Counter from "./Counter";

const Counters = ({ list, counterValue, onAdd, onSubtract }) => {
  const showCounters = (element, index) => {
    console
      .log
      //`Counters id: ${element.itemId} value: ${element.counterValue} index: ${index}`
      ();
    return (
      <div key={index}>
        <Counter
          id={element.itemId}
          value={element.counterValue}
          onAdd={onAdd}
          onSubtract={onSubtract}
        />
      </div>
    );
  };

  return <div>{list.map(showCounters)}</div>;
};

export default Counters;
