import React, { useState } from 'react'
import './style.css'


export default function Header({handle_mode}) {
    const[active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
        handle_mode((prev)=>!prev);
      };
  return (
    <div className='header'>
        <h1>MY NOTE</h1>
        <button  className="button-17" onClick={handleClick} >{ active ? "Light" : "Dark"}</button>
    </div>
  )
}
