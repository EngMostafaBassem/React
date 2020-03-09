
import React, { useState } from 'react'
import ToDoList from './ToDoList'
import ToDoForm from './ToDoForm'
const Main=()=>{
   const [tasks,setTasks]=useState([])
   const [marked,setMarked]=useState(false)
   const [cleared,setCleard]=useState(false)
   const markCompeleted=()=>{
     //  alert('marked')
     console.log('completed')
       setMarked(true)
   }
   const clearToDo=()=>{
       setTasks([])
       setMarked(false)
       setCleard(true)
      
   }
   const handleToDo=(e,task)=>{
       console.log(task)
       e.preventDefault();
       if(marked||cleared) 
       {
        setTasks(tasks);
        setCleard(false)
       }
      
       else  setTasks([...tasks,task])
    }
      
    return(
        <div>
            <ToDoForm 
            handleToDo={handleToDo}
            markCompeleted={markCompeleted}
            clearToDo={clearToDo}/>

            <ToDoList marked={marked} list={tasks}/>
            
        </div>
    )
}
export default Main