import React, {useState} from "react";
import "./styles.css";

export default function App() {

  const [list, setList] = useState([])
  const [input, setInput] = useState('')

  const handleInput = (value) => {
    
    const newInput = value
    
    console.log(`[ handleInput ] newInput: ${newInput}`)
    
    setInput(newInput)
  }

  const handleInputList = (value,index) => {
    
    console.log(`[ handleInputList 1] index: ${index} value: ${value}`)
    
    const newInput = value
    console.log(`[ handleInputList 2] newInput: ${newInput}`)
    
    const oldList = list
    console.log(`[ handleInputList 3] oldList: ${oldList[index]}`)
    
    oldList[index] = value
    console.log(`[ handleInputList 4] newList: ${oldList}`)

    setList([...oldList])
  }

  // const updateList = (event,index) => {

  //   const eventComing = event.key
  //   console.log(`[ updateList ] event Coming ${eventComing}`)

  //   // No Enter event
  //   if(eventComing !== 'Enter') {
  //     return;
  //   }

  //   // Enter event
  //   const oldList = list
  //   console.log(`[ updateList 1] oldList: ${oldList}`)

  //   const value = inputTwo
  //   console.log(`[ updateList 2] inputTwo: ${value}`)

  //   oldList[index] = value
  //   console.log(`[ oldList 3] newList: ${oldList}`)

  //   setList(oldList)
  // }

  const saveInputTolist = (event) => {
    
    const eventComing = event.key
    console.log(`[ saveInputTolist 1] event Coming ${eventComing}`)
    
    // No Enter event
    if(eventComing !== 'Enter') {
      return;
    }

    // Enter event
    const eventValue = event.target.value
    console.log(`[ saveInputTolist 2] the value of the event ${eventValue}`)
    
    setList([...list,eventValue])
    setInput('')
  
  }

  const showList = (item, index) => {
    return (
      <li key={index}>
        <input
          type='text'
          value={item}
          onChange={(e) => handleInputList(e.target.value, index)}
          //onKeyPress={(event) => updateList(event, index)}
          />
          <button>x</button>
      </li>
    )
  }

  //const customList =  list.map(showList)

  const updatedInput = input
  console.log(`[ Input ] updated input ${updatedInput}`)

  const updatedList = list
  console.log(`[ List ] updated list ${updatedList}`)

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {/* UserInput */}
      <input
        type='text'
        value={input}
        onChange={(e) => handleInput(e.target.value)}
        onKeyPress={(event) => saveInputTolist(event)}
        />
      <br/><br/>
      {/* Test show a list of input */}
      {
        list.map(showList)
      }
    </div>
  );
}
