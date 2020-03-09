import React from 'react'
const ToDoList=(props)=>{

    return(
        <div>
            {
            props.list.map(item=> (props.marked)?
            <li style={{color:'green'}}>{item}</li>:
            <li style={{color:'red'}}>{item}</li>
            )}
        </div>
    )
}
export default ToDoList