import React from 'react';
import '../styles/Task.css'


function Task({task, onDeleteTask, onToggle}) {
    return (
        <div className={`task ${task.reminder ? "reminder" : ""}`}
           onDoubleClick={() => onToggle(task.id)}
         >

            <div className="task-close">
                {task.text}
                
                <p className="closeX" onClick={() => onDeleteTask(task.id)}>
                    X
                </p>
            </div>

            <p>{task.day}</p>
            
        </div>
    );
}

export default Task;