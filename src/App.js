
import './App.css';
import Header from './components/Header';
import CreateArea from './components/CreateArea';
import Note from './components/Note';
import { useState } from 'react';

function App() {
  // Using the useState hook to declare a state variable named as notes and a function named setNotes to update its value.
  const [notes, setNotes] = useState([]);

  //Implementing the add note functionality
  function addNote(newNote){  
    setNotes(prevNotes =>{
      return [...prevNotes,  newNote ];
    })
  }

  //Implementing delete note functionality
function deleteNote(id ){
  setNotes(prevNotes=>{
    return prevNotes.filter((noteItem, index)=>{
      return index !== id;
    })
  })
}

  return (
    <div className="App">
     <Header/>
     <CreateArea
      onAdd = {addNote} //Passing props to a CreateArea child component 
     />

     {/* Using map function to iterate over each item in array of notes and display them using Note component */}
     {notes.map((noteItem, index) =>{ 
      /* noteItem represents each individual item in the notes array and index represents the index of the current item being processed */
      return(
        <Note
        key={index} id={index}
        task= {noteItem.task} priority={noteItem.priority} description={noteItem.description}
        onDelete ={deleteNote} 
      />)
     })}
    </div>
  );
}

export default App;



