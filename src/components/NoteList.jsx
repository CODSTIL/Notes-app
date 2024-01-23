/* eslint-disable react/prop-types */
import {Note,AddNote} from '../components'

const NoteList = ({notes,addNotes,handleDeleteNote}) => {

  return (
    <div className="notes-list">
       {notes.map( (note) => (
             <Note 
               title={note.title}
               key={note.id} 
               id={note.id} 
               text={note.text} 
               date={note.date} 
               handleDeleteNote={handleDeleteNote}/>
       ) )}
       <AddNote add={addNotes} />
    </div>
  )
}

export default NoteList
