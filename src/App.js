import {nanoid} from'nanoid';
import React, { useState } from 'react'
import NotesList from './components/NotesList'
import Search from './components/Search'
import '../src/components/style.css'
import Header from './components/Header';
import { useEffect } from 'react';
import secureLocalStorage from 'react-secure-storage'

export default function App() {
  const [notes,setNotes] = useState([
  {
    id:nanoid(),
    text:"WELCOME TO MY NOTE.                You can write your daily Goals and keep track on them",
    // date:"15/4/25"
  },
  // {
  //   id:nanoid(),
  //   text:"third note",
  //   date:"75/4/25"
  // },
]);

const addNote = (text) => {
  const date = new Date();
  const NewNote = {
    id:nanoid(),
    text:text,
    date:date.toLocaleDateString()
  }
  const NewNotes = [...notes,NewNote];//creates new array copy of above and add new
  setNotes(NewNotes);
  secureLocalStorage.setItem('react-notes-app-data',
  JSON.stringify(NewNotes));  
};

const deleteNote = (id) => {
  const newNotes = notes.filter((note)=>note.id !==id );
  setNotes(newNotes);
  secureLocalStorage.setItem('react-notes-app-data',
  JSON.stringify(newNotes));  
}
const [searchText,setSearch] = useState("");

const [darkMode,setDark] = useState(false);

useEffect(()=>{       //RENDERS DATA FROM LOCAL STORAGE
  const savedNotes = JSON.parse(secureLocalStorage.getItem('react-notes-app-data'));

if (savedNotes!==null){
  setNotes(savedNotes);
}
  },[]);
   return (
   <div className={`${darkMode && 'dark-mode'}`}>
    <div className='container'>
      <Header handle_mode={setDark}/>
      <Search handle_search={setSearch}/>
    <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText.toLowerCase()))} handleNote={addNote} handleDelete={deleteNote}/>
    </div>
   </div>
    
  )
}
 