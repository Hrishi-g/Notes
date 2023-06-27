import React, { useState } from 'react';
import './style.css';


export default function NewNote({handleNote}) {
    const [text,setText] = useState("");
    const charLimit = 200;

    const handlechange=(e)=>{
        if(charLimit-(e.target.value.length) >=0){
            setText(e.target.value);
        }
    }

    const handleclick=()=>{
        if(text.trim().length>0){
            handleNote(text);
            setText("");
        }else{
            alert("Enter proper text");
        }
    }
 
  return (
    <div className='notes new'>
        <textarea cols="10" rows="8" placeholder='Type to add..'
        value={text}
        onChange={handlechange}>
        </textarea>
        <div className='notes-foot'>
            <small>{charLimit-text.length} remaining</small>
            <button className='save' onClick={handleclick}>Save</button>
        </div>
    </div>
  )
}
