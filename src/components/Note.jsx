import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa";

const Note = (props) => {
// Define styles based on priority
let priorityStyles = {};
if (props.priority === 'Low') {
  priorityStyles = {
    color: 'white',
    backgroundColor: '#17a2b8'
  };
} else if (props.priority === 'Medium') {
  priorityStyles = {
    color: 'black',
    backgroundColor: '#ffc107',
    
  };
} else if (props.priority === 'High') {
  priorityStyles = {
    color: 'white',
    backgroundColor: 'red'
  };
}
  // whether to display edit button based on priority
  let showEditButton = true;
  if (props.priority === 'Medium' || props.priority === 'High') {
    showEditButton = false;
  }

  //style for props.task based on props.priority
  const taskStyle = {
    textDecoration: props.priority === 'Medium' || props.priority === 'High' ? 'line-through' : 'none'
  };

  //Deleting the notes
  const handleDelete=()=>{
    props.onDelete(props.id)
  }



  return (
    <div className='notes'>
    <div className="eachItem">
    <div className="contents">
      <h6 style={taskStyle} className='textBlue'>{props.task} 
      <span style={priorityStyles} className='span badge'>{props.priority}</span>
      </h6>
      <p>{props.description}</p>
    </div>
        <div className="buttons">
        {showEditButton && <button className='btn btn-success'><FaCheck /></button>}

      {showEditButton && <button className='btn btn-warning'><i className="far fa-edit "></i></button>}

      <button onClick={handleDelete} className='btn btn-danger'><i className="far fa-trash-alt add-btn" ></i></button>
        </div>
    </div>
    </div>
  )
}

export default Note
