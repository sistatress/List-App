import React from "react";
import Input from "@material-ui/core/Input";

const InputUI = React.forwardRef(({ value, itemId, ...action }, ref) => {
  const handleInput = action.handleInput;
  const handleInputList = action.handleInputList;
  const saveInputTolist = action.saveInputTolist;
  //const itemId = action.itemId;
  //console.log(`Itemcomponent: itemID: ${itemId}`);

  const inputOnChangeAction =
    handleInputList === undefined
      ? (e) => handleInput(e.target.value)
      : (e) => handleInputList(e.target.value, itemId);

  const inputOnKeyPressAction =
    saveInputTolist === undefined
      ? () =>
          console.log(
            "TODO: tap Enter in list should permit to focus next item (input) "
          )
      : (event) => saveInputTolist(event);

  // logInputAction(
  //   handleInput,
  //   handleInputList,
  //   saveInputTolist,
  //   inputOnChangeAction,
  //   inputOnKeyPressAction
  // );

  return (
    <>
      <Input
        ref={ref}
        type="text"
        value={value}
        onChange={inputOnChangeAction}
        onKeyPress={inputOnKeyPressAction}
      />
    </>
  );
});

export default InputUI;

export const logInputAction = (
  handleInput,
  handleInputList,
  saveInputTolist,
  inputOnChangeAction,
  inputOnKeyPressAction
) => {
  console.log(` 
  *********      Input actions :

  ---------------handleInput---------------

  ${handleInput}

  ---------------handleInputList---------------------

  ${handleInputList}

  ---------------saveInputTolist---------------------

  ${saveInputTolist}

  ---------------inputOnChangeAction-----------------

  ${inputOnChangeAction}

  ---------------inputOnKeyPressAction---------------

  ${inputOnKeyPressAction}
  
  *********`);
};
