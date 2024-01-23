/* eslint-disable react/prop-types */
//import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";

const Note = ({title,id,text,date,handleDeleteNote}) => {
  

  
   

  return (
    <div className="note">
        <h3>{title}</h3>
        <textarea name="note" id="text" cols="30" rows="10" className="text"  value={text} readOnly></textarea>
        <div className="note-footer">
            <small>{date}</small>
           <MdDeleteForever  onClick={() => handleDeleteNote(id)}  className="delete-icon" size="1.3em"/>
        </div>
    </div>
  )
}

export default Note
