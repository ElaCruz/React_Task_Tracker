import React from 'react'; 
import '../styles/Button.css'

function Button({action, color, onClick}) {
    return (
        <div>
            <button style={{backgroundColor:color}} onClick={onClick} >
                {action}
            </button>
            
        </div>
    );
}

export default Button;