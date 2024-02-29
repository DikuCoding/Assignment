import React, { useState } from 'react'

const CreateArea = (props) => {
  // Using the useState hook to declare a state variable named note and a function named as setNote to update its value.
    const [note, setNote] = useState({
      // initializing state object
        task: "",
        priority:"",
        description: ""
    })
    // Handling input changes for each field in the note object.
    const handleChange=(event)=>{
        const {name, value} = event.target; // using object destructuring to access these properties

        setNote((prevNote)=>{
            return{
                ...prevNote,
                [name]:value
            }
        })
    }
    //Adding the notes when user clicks on add button
    const submitNote =(event)=>{
        if(!note.task || !note.description){
            alert("Please fill the data");
          }
          else{
            props.onAdd(note)
              //setting the content to empty
              setNote({
                  task: "",
                  priority:"",
                  description: ""
                })
            }
                event.preventDefault(); //preventing the default behaviour of form submission 
    }
  return (
    //Creating input fields to take inputs and a button to submit them
    <div className='inputArea'>
      <form>
      <div className="fields">
      <div className="task">
        <input type="text" name='task' placeholder='Enter your task' onChange={handleChange} value={note.task}/>
      </div>

     <div className="priority">
        <select name="priority" id="" placeholder="Select your priority" onChange={handleChange}
         value={note.priority}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
        </select>
     </div>

       <div className="textarea">
        <textarea name="description" id="" cols="30" rows="4" placeholder='Enter your description'
        onChange={handleChange}
        value={note.description}
        ></textarea>
      </div>
       </div>
       <button type="button" onClick={submitNote} className="btn btn-success mx-3">Add</button>
      </form>
    </div>
  )
}

export default CreateArea
