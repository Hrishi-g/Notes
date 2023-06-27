import { MdDeleteForever } from 'react-icons/md'
import React from 'react'
import './style.css'

export default function Notes({text,id,date,handleDelete}) {
  return (
    <div className='notes'>
      <span>{text}</span>
      <div className='notes-foot'>
        <small>{date}</small>
        <MdDeleteForever onClick={()=>handleDelete(id)} size='1.3em'/>
      </div>
    </div>
  )
}
