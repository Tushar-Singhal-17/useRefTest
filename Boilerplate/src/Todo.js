 import React, {useRef, useState} from 'react';
 const _ = require("lodash")

const usePrevious = (value) => {
    const ref = React.useRef()
  
    React.useEffect(() => {
      ref.current = value
    }, [value])
  
    return ref.current
  }
const Todo = () => {
    const initialValue = {name: 'To Test', points: 0}
    const [todo, setTodo] = React.useState(initialValue);
    const [clicks, setClicks]=useState(-1);
    const [index, setIndex]= useState(0);

    const previousTodo = usePrevious(todo)
    //var kuchBhi=0;                                     
    React.useEffect(() => {                                
        //     if (!_.isEqual(previousTodo, todo)) {       // Here we have commented this condition, so we are not using useRef in this case 
                setClicks(clicks+1);                       // Test case should fail
      //}                                                  
    }, [todo])
    // const val=()=>{
    //     const arr=[0.6,0.8,0.7,0.6,0.2];
    //     for(i=0;i<5;i++)
    //     return arr[i];
    // }
    const arr=[0.6,0.7,0.2];
    const gainPoints = (index) => {
      //  console.log(val);
        if(index==3)
        index=0;
       const newPoints = arr[index] <= 0.5 ? todo.points : todo.points + 1
       setIndex(index+1);
       setTodo(prevTodo => ({...prevTodo, points: newPoints}))
    }
    
    return (
      <>
      <div style={{textAlign: "center"}}>
         <p data-cy="value">Current points: {todo.points}</p>
         <button data-cy="increment" onClick={()=>gainPoints(index)}>Increase stakes</button>
         <p data-cy="testing">{clicks}</p>
         </div>
      </>
    )
  }
  
  export default Todo