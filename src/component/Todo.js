import React, {useState} from 'react';
import { FaPlus } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {addTodo,deleteTodo,removeTodo} from "../Action/index";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
import "react-time-picker/dist/TimePicker.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';







const Todo = ()=> {
    const [inputData, setInputData] = useState('');
    
    const list = useSelector ((state)=> state.TodoRed.list);
<<<<<<< HEAD
     const dispatch = useDispatch();


=======
    const dispatch = useDispatch();
    const [descData, setDescData] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [value, onChange] = useState('10:00');
    const options = [
      'manas sahoo', 'deepak parida', 'chandan parida'
    ];
    const defaultOption = options[0];
>>>>>>> 1de2219fb138fb165e2b7624b882b7eebbaa28a3
    return (
        <>
        
    <div className ="min_div">
      <div className = "child_div">
        
          <div className = " addItem">
<<<<<<< HEAD
            <p>FirstName:
            <input type = "text" placeholder = "Items value"  value = {inputData}
             onChange = {(event) => setInputData(event.target.value) }/>
             </p>
             
            <div className="plus">
            <button onClick ={ () => dispatch(addTodo(inputData),
              setInputData(''))}> ADD</button>
              
              </div>
              </div>
=======
            <h2>Task </h2>
           
           <div>
            <FaPlus onClick ={ () => dispatch(addTodo(inputData),
              setInputData(''))}/>
              </div>
              
            
                        </div>
     

  
>>>>>>> 1de2219fb138fb165e2b7624b882b7eebbaa28a3
      <div className = " ShowItems">
        {
          list.map ((elem)=> {
         return (
       <div className = "eachItem">
           <h3> {elem.data} </h3>

           <div className = "task">
                        <div className = "descp_data">
                        <h2>Task Description</h2>
               <input type = "text" placeholder = "add items"  value = {descData}
               onChange = {(event) => setDescData(event.target.value) }
            />
            </div>
          
           

    <div className ="date_time">
    <div className = "date">
      <h2>Date</h2>
     
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    </div>
    <div className = "time">
      <h2>Time</h2>
     
      <TimePicker
        onChange={onChange}
        value={value}
      />
      </div>
    </div>
    <div className = "dropdrown">
      <h2>Assign user</h2>
    <Dropdown options={options}  value={defaultOption} placeholder="Select an option" />
   </div>
   <div className="button">
   <div className ="cancel_button">
   <Button variant="contained">cancel</Button>
   </div>
   <div className="save_button">
   <Button
        onClick ={ () => dispatch(addTodo(inputData),
          setInputData(''))}
        variant="contained"
        color="primary"
        size="large"
       
        
        startIcon={<SaveIcon  />}
      >
        Save
      </Button>
      </div>
      </div>
      </div>
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

          {/*same item */}
                  
         
           
            </div>
            </div>
        </>
    );
};

export default Todo; 