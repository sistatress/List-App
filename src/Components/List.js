import React from "react";
import "./list.css";
import Item from "./Item";
import { useTransition, config } from "react-spring";
import { useEffect } from "react";

const List = ({
  list,
  updateItem,
  deleteItem,
  incrementCounter,
  onSubtract
}) => {
  useEffect(() => {
    const mounted = { current: true };

    if (mounted) {
      console.log(`list mounted`);
    }

    return () => {
      mounted.current = false;
      console.log(`list unmounted!`);
    };
  }, []);

  const transition = useTransition(list, (item) => item.itemId, {
    config: config.gentle,
    from: { opacity: 0, transform: "translate3d(-25%, 0px, 0px)" },
    enter: { opacity: 1, transform: "translate3d(0%, 0px, 0px)" },
    leave: { opacity: 0, height: 0, transform: "translate3d(25%, 0px, 0px)" }
  });

  return (
    <>
      {transition.map(
        ({ item, props, key }) =>
          item && (
            <Item
              key={item.itemId}
              style={props}
              item={item}
              updateItem={updateItem}
              deleteItem={deleteItem}
              incrementCounter={incrementCounter}
              onSubtract={onSubtract}
            />
          )
      )}
    </>
  );
};

export default List;
