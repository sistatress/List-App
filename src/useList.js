import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useInput from "./useInput";



const useList = () => {
  
  const [list, setList] = useState([]);
  const {setInput} = useInput();

    /***************** handle input items in List ****************/

  // Create a new item
  const createItem = (event) => {
    console.log(`listItems: ${JSON.stringify(list)}`);
    const eventComing = event.key;
    //console.log(`[ createItem 1] event Coming ${eventComing}`);

    // No Enter event
    if (eventComing !== "Enter") {
      return;
    }

    // Enter event
    const inputValue = event.target.value;
    const id = uuidv4();
    const item = {
      itemId: id,
      itemValue: inputValue,
      counterValue: 0
    };

    // Set counters state
    setList([...list, item]);

    // Clear User Input
    setInput("");
  };

  // Update item's input
  const updateItem = (value, id) => {
    //console.log(`id : ${id}`)
    const itemIndex = list.findIndex(
      (itemElement) => itemElement.itemId === id
    );

    //console.log(`itemIndex ${itemIndex}`)
    const listItems = [...list];

    listItems[itemIndex] = { ...listItems[itemIndex], itemValue: value };
    setList([...listItems]);
  };

  // delete item
  const deleteItem = (id) => {
    // Copy of the counters array
    const listItems = [...list];

    // Delete counter
    const newList = listItems.filter((item) => item.itemId !== id);

    // Set counters state
    setList(newList);
  };

  /***************** /handle input items in List ****************/
  
  return {
    list, 
    createItem, 
    updateItem, 
    deleteItem,  
  }
}

export default useList;