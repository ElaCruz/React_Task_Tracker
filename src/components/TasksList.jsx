import React from 'react';
// import '../styles/TasksList.css'
import Task from './Task';

function TasksList({tasks, onDeleteTask, onToggle}) {
    return (
        <div>
            {tasks.map((task) => (
                <Task
                   key={task.id}
                   task={task}
                   onDeleteTask={onDeleteTask}
                   onToggle={onToggle}
               />
           
            ))} 
          
        </div>
    );
}

export default TasksList;