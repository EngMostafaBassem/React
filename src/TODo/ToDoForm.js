import React, { useState } from 'react'
const ToDoForm=(props)=>{
    const [task,setNewTask]=useState('')
    
    const setTask=(task)=>{
      setNewTask(task)
    }
    return(
        <div>
            <form  onSubmit={(e)=>props.handleToDo(e,task)}>
                <input  value={task} onChange={(e)=>setTask(e.target.value)}/>
                
                
                 <button type="submit" >Add</button>
                 <button onClick={()=>props.clearToDo()} >Clear</button>
                 <button onClick={()=>props.markCompeleted()} >Completed</button>
            </form>
        </div>
    )
}
export default ToDoForm