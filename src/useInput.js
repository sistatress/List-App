import { useState } from "react";

const useInput = () => {
  const [input, setInput] = useState("");

  /* handle user input */
  const handleInput = (value) => {
    const newInput = value;
    setInput(newInput);
  };

  return {input, setInput, handleInput};
}

export default useInput;