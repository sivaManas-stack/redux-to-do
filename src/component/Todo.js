import React, {useState} from 'react';
import { FaPlus } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {addTodo,deleteTodo,removeTodo} from "../Action/index";


const Todo = ()=> {
    const [inputData, setInputData] = useState('');
    const list = useSelector ((state)=> state.TodoRed.list);
     const dispatch = useDispatch();


    return (
        <>
        
    <div className ="min_div">
      <div className = "child_div">
        <h2>Add Your List</h2>
          <div className = " addItem">
            <p>FirstName:
            <input type = "text" placeholder = "Items value"  value = {inputData}
             onChange = {(event) => setInputData(event.target.value) }/>
             </p>
             
            <div className="plus">
            <button onClick ={ () => dispatch(addTodo(inputData),
              setInputData(''))}> ADD</button>
              
              </div>
              </div>
      <div className = " ShowItems">
        {
          list.map ((elem)=> {
         return (
       <div className = "eachItem">
           <h3> {elem.data} </h3>
          <FaTrashAlt onClick ={ () => dispatch(deleteTodo(elem.id),
            )}/>
            <div>
            <button >EDIT</button>
            </div>
           </div>
         )
          })
        },
  
           

              </div>
            </div>
            </div>
        </>
    );
};

export default Todo; 