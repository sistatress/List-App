import useList from './useList'

/***************** handle items'Counter in List ****************/

const useCounter = () => {

  const { list, setList } = useList();
  
  const increment = (value) => {
    return ++value;
  }

  const decrement = (value) => {
    return --value;
  }

  const incrementCounter = (id, value) => {
    //console.log(`value: ${value} Id: ${id}`);
    const itemIndex = list.findIndex(
      (itemElement) => itemElement.itemId === id
    );

    const listItems = [...list];
    const newCounterValue = increment(value);

    listItems[itemIndex] = {
      ...listItems[itemIndex],
      counterValue: newCounterValue
    };
    //console.log(`listItems: ${JSON.stringify(listItems)}`);
    //console.log(`newCounterValue: ${newCounterValue}`);
    setList([...listItems]);
  };

  const decrementCounter = (id, value) => {
    //console.log(`value: ${value} Id: ${id}`);
    const itemIndex = list.findIndex(
      (itemElement) => itemElement.itemId === id
    );

    const listItems = [...list];
    const newCounterValue = decrement(value);

    listItems[itemIndex] = {
      ...listItems[itemIndex],
      counterValue: newCounterValue
    };
    console.log(`listItems: ${JSON.stringify(listItems)}`);
    console.log(`newCounterValue: ${newCounterValue}`);
    setList([...listItems]);
  };
  

  return {decrementCounter,incrementCounter }
}

export default useCounter;