import React from 'react'
import Notes from './Notes'
import NewNote from './NewNote'

export default function Notes_list({notes,handleNote,handleDelete}) {
  return (
    <div className='notes-list'>
      {notes.map((note)=><Notes key={note.id} text={note.text} id={note.id} date={note.date} handleDelete={handleDelete}/>)}
      <NewNote handleNote={handleNote} />
    </div>
  )
}
