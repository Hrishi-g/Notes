import React from 'react'
import './style.css';
import { MdSearch } from 'react-icons/md';

export default function Search({handle_search}) {
  return (
    <div className='search'>
        <MdSearch className='search-icons' size='1.3em'/>
        <input type="text" placeholder='search..' onChange={(e)=>handle_search(e.target.value)}/>
    </div>
  )
}
