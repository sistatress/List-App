import React from "react";

const Input = ({ value, ...action }) => {
  const handleInput = action.handleInput;
  const handleInputList = action.handleInputList;
  const saveInputTolist = action.saveInputTolist;
  const inputIndex = action.inputIndex;
  // console.log(`[ Input ] inputIndex : ${inputIndex}`);
  const inputOnChangeAction =
    handleInputList === undefined
      ? (e) => handleInput(e.target.value)
      : (e) => handleInputList(e.target.value, inputIndex);
  // console.log(`[ Input ] handleInputList : ${handleInputList}`);
  // const { saveInputTolist } = action.saveInputTolist
  //const inputIndexAction = inputIndex === undefined ? null : inputIndex;
  const inputOnKeyPressAction =
    saveInputTolist === undefined
      ? () => console.log("NO")
      : (event) => saveInputTolist(event);

  // logInputAction(
  //   handleInput,
  //   handleInputList,
  //   saveInputTolist,
  //   inputOnChangeAction,
  //   inputOnKeyPressAction
  // );

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
