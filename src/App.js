
import { useState } from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';

import Login from './pages/Login/Login';

function App() {
  const [login, setLogin] = useState(false)
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  function addNotes(e) {
    e.preventDefault() 
      const noteNew = { title, text }
      setNotes([...notes, noteNew])
  }

  function removeNotes(notesTarget) {
    const newNoteList = notes.filter((note) => note !== notesTarget)
    setNotes(newNoteList)
  }

  return (
    <div className="App">
      {login ? 
        (<Dashboard 
            setLogin={setLogin} 
            addNotes={addNotes}
            title={title}
            setTitle={setTitle}
            text={text}
            setText={setText}
            removeNotes={removeNotes}
            notes={notes}
            />)
        :
        (<Login setLogin={setLogin}/>)}
      
    </div>
  );
}

export default App;
