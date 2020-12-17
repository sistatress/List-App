import React from "react";
import Input from "@material-ui/core/Input";

const InputUI = ({ value, itemId, ...action }, ref) => {
  const handleInput = action.handleInput;
  const updateItem = action.updateItem;
  const createItem = action.createItem;
  //const itemId = action.itemId;
  //console.log(`Itemcomponent: itemID: ${itemId}`);

  const inputOnChangeAction =
    updateItem === undefined
      ? (e) => handleInput(e.target.value)
      : (e) => updateItem(e.target.value, itemId);

  const inputOnKeyPressAction =
    createItem === undefined
      ? () =>
          console.log(
            "TODO: tap Enter in list should permit to focus next item (input) "
          )
      : (event) => createItem(event);

  // logInputAction(
  //   handleInput,
  //   updateItem,
  //   createItem,
  //   inputOnChangeAction,
  //   inputOnKeyPressAction
  // );

  return (
    <>
      <Input
        type="text"
        value={value}
        onChange={inputOnChangeAction}
        onKeyPress={inputOnKeyPressAction}
      />
    </>
  );
};

export default InputUI;

export const logInputAction = (
  handleInput,
  updateItem,
  createItem,
  inputOnChangeAction,
  inputOnKeyPressAction
) => {
  console.log(` 
  *********      Input actions :

  ---------------handleInput---------------

  ${handleInput}

  ---------------updateItem---------------------

  ${updateItem}

  ---------------createItem---------------------

  ${createItem}

  ---------------inputOnChangeAction-----------------

  ${inputOnChangeAction}

  ---------------inputOnKeyPressAction---------------

  ${inputOnKeyPressAction}
  
  *********`);
};
