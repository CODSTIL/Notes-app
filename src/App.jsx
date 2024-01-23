
import { useEffect, useState } from 'react'
import './App.css'
import {nanoid} from 'nanoid'
import { Search,Header,NoteList } from './components';


function App() {
  
  const [notes,setNotes] = useState([]);
  const [searchText,setSeachText] = useState('');
  const [darkMode,setDarkMode] = useState(false)

  
  useEffect( () => {
     const savedNotes = JSON.parse(localStorage.getItem('notes-data'));
     
     if(savedNotes){
        setNotes(savedNotes);
     }

  },[] )



  useEffect( () => {
    localStorage.setItem( 'notes-data' , JSON.stringify(notes) )
  },[notes] )

    const addNotes = (text,title) => {
       const date = new Date();
       const newNote = {
            title:title,
            text:text,
            date:date.toLocaleDateString(),
            id: nanoid()

       }

       setNotes( prev => [...prev,newNote] )
    }
  
    const delteNote = (id) => {
       const newNotes = notes.filter( (note) => note.id !== id );
       setNotes(newNotes);
    }


  return (
    <>
      <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header handleDarkMode={setDarkMode}/>
        <Search handleSearchText={setSeachText}/>
        <NoteList 
           notes= {notes.filter( (note) => note.text.toLowerCase().includes(searchText) )} 
           addNotes={addNotes} 
           handleDeleteNote={delteNote}           
           />
      </div>
      </div>
    </>
  )
}

export default App
