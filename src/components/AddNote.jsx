/* eslint-disable react/prop-types */
import { useState } from "react";


const AddNote = ({add}) => {

    const [text,setText] = useState('');
    const [title,setTitle] = useState('');

    const count = 200;

    const handleChange = (e) => {
        if(count-e.target.value.length >= 0){
          setText(e.target.value);
        }

      
    }

    const handleChangeTitle = (e) => {
         setTitle(e.target.value);
    }
    
    const handleAdd = (e) => {

        if(text.trim().length){
            e.preventDefault();
            add(text,title);
            setText('');
            setTitle('');
        }
        return;
    }


    return (
         <>
           <div className="note new">
            <input type="text" className="title" onChange={handleChangeTitle} value={title} placeholder="Add Title" />
              <textarea 
                 name="" 
                 id="" 
                 cols="30" 
                 rows="30"
                 onChange={handleChange}
                 value={text}
                 placeholder="Add note..."
                 >   
              </textarea>
              <div className="note-footer">
                 <small> { count - text.length} words remaining...</small>
                 <button className="save" onClick={handleAdd}>Save</button>
              </div>
           </div>
         </>
    )
}

export default AddNote;