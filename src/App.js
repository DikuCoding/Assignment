
import './App.css';
import Header from './components/Header';
import CreateArea from './components/CreateArea';
import Note from './components/Note';
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);
  const [updateState, setUpdateState] = useState(-1);

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
      onAdd = {addNote}
     />
     {notes.map((noteItem, index) =>{
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



