
import { useState } from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';

import Login from './pages/Login/Login';

function App() {
  const [login, setLogin] = useState(false)
  // const [notes, setNotes] = useState([])
  // const [counter, setCounter] = useState(0)

  // function addNotes(note) {
  //   const newNote = {
  //       id: counter,
  //       title: note.title,
  //       text: note.text,
  //   }
  //   setNotes([...notes, newNote]);
  //   setCounter(counter +1);
  // }

  // function removeNotes(id) {
  //   const newNoteList = notes.filter((note) => note.id !== id)
  //   setNotes(newNoteList)
  // }

  return (
    <div className="App">
      {login ? 
        (<Dashboard setLogin={setLogin}/>)
        :
        (<Login setLogin={setLogin}/>)}
      
    </div>
  );
}

export default App;
