import React, { useState } from 'react';
import { addList } from '../redux/listSlice';
import { useDispatch } from 'react-redux';
function AddNew(props) {
  const dispatch=useDispatch();
    const[inputVal,setInputVal]=useState("");
    const[isFormVisible,setFormVisible]=useState(false);
    const submitHandler=(e)=>{
      dispatch(addList({id:Math.random(),title:inputVal}));
        e.preventDefault();
       setInputVal("");
    } ;
    const openForm=()=>{
      setFormVisible(true)
    }
    const hideForm=()=>{
      setFormVisible(false)
    }
    return (
        <div>
          <button onClick={openForm}> + Add New</button>  
         {
          isFormVisible &&(

        
             <form onSubmit={submitHandler} className='mt-3'>
            <input value={inputVal} onChange={(e)=>setInputVal(e.target.value)} placeholder='Enter List Name'/>
            <div className='mt-3'>
            <button onClick={hideForm} className='mr-3'>Cancel</button>
            <button onClick={submitHandler} className='px-3 py-1 bg-blue-500'>Save</button>

            </div>
            
          </form>
          )
           }
          
         
            
        </div>
    );
}

export default AddNew;