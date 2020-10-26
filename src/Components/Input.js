import React from "react";

const Input = ({ value, ...action }) => {
  const handleInput = action.handleInput;
  const handleInputList = action.handleInputList;
  const saveInputTolist = action.saveInputTolist;
  const inputIndex = action.inputIndex;

  const inputOnChangeAction =
    handleInputList === undefined
      ? (e) => handleInput(e.target.value)
      : (e) => handleInputList(e.target.value, inputIndex);
  // const { saveInputTolist } = action.saveInputTolist

  const inputOnKeyPressAction =
    saveInputTolist === undefined ? null : (event) => saveInputTolist(event);

  logInputAction(
    handleInput,
    handleInputList,
    saveInputTolist,
    inputOnChangeAction,
    inputOnKeyPressAction
  );

  return (
    <div>
      {/* <h2>Input Component</h2> */}
      <input
        type="text"
        value={value}
        onChange={inputOnChangeAction}
        onKeyPress={inputOnKeyPressAction}
      />
    </div>
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
