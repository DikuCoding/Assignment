import React, { useState } from 'react'

const CreateArea = (props) => {
    const [note, setNote] = useState({
        task: "",
        priority:"",
        description: ""
    })
    const handleChange=(event)=>{
        const {name, value} = event.target;

        setNote((prevNote)=>{
            return{
                ...prevNote,
                [name]:value
            }
        })
    }
    const submitNote =(event)=>{
        if(!note.task){
            alert("Please fill the data");
          }
          else{

              //setting the content to empty
              setNote({
                  task: "",
                  priority:"",
                  description: ""
                })
                props.onAdd(note)
            }
                event.preventDefault();
    }
  return (
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
