import React from 'react';
import '../styles/Header.css'
import Button from './Button';

function Header({title, showAdd, onAdd}) {
    return (
        <div className='head'>
            <h2 className='mainTitle'>{title}</h2>

            <Button 
               action = {showAdd ?  "Close": "Add Task"}
               color = { showAdd ? "red" : "white" } 
               onClick = {onAdd}
            />
            
        </div>
    );
}

export default Header;