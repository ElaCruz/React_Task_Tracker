import React from 'react';
import { useState } from 'react';
import '../styles/AddForm.css';


function AddForm({onAdd}) {


    const [text, setText ] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e)=>{
        e.preventDefault();

        if(!text){
            alert("Please add a task...");
            return;
        }

        onAdd({text, day, reminder});
         
        setText("");
        setDay("");
        setReminder(false);
        
    }


    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label>Task</label>
                    <input type="text"
                       placeholder='Add Task'
                       value={text}
                       onChange={(e) => setText(e.target.value)}
                    />
                </div>

                <div className="form-control">
                    <label>Add Date and Time</label>
                    <input type="text"
                       placeholder='Add Date and Time'
                       value={day}
                       onChange={(e) => setDay(e.target.value)}
                    />
                </div>

                <div className="form-control checkbox">
                    <div>
                        <input type="checkbox"
                            placeholder='Add Task' className='check'
                            checked={reminder}
                            value={reminder}
                            onChange={(e) => setReminder(e.currentTarget.checked)}
                        />
                    </div>    
                    <label>Set Reminder</label>
                    
                </div>

                <input className="submit-btn" type="submit" value='Save Task' />
                                 
            </form>
            
        </div>
    );
}

export default AddForm;