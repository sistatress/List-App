import React from "react";

const Input = ({ value, ...action }) => {
  const handleInput = action.handleInput;
  const handleInputList = action.handleInputList;
  const saveInputTolist = action.saveInputTolist;
  const itemId = action.itemId;

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
      {/* <h2>Input Component</h2> */}
      <input
        type="text"
        value={value}
        onChange={inputOnChangeAction}
        onKeyPress={inputOnKeyPressAction}
      />
    </>
  );
};

export default Input;

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
