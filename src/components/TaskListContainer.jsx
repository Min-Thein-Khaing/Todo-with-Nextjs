"use server"
import React from 'react'
import TaskList from './TaskList';


const fetchTasks = async() => {
    const res = await fetch("http://localhost:3003/tasks",{
        next :{
            tags:["tasks"]
        }
    });
    const json = await res.json();
    return json;
}

const TaskListContainer = async() => {
    const tasks = await fetchTasks()
  return (
   <div className='w-full'>
     {tasks.map(task => <TaskList key={task.id} task={task}  />)}
   </div>
  )
}

export default TaskListContainer