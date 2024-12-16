"use server"

import React from 'react'
import DeleteForm from './DeleteForm'

const TaskList = ({task:{id,title,is_done,created_at}}) => {
  return (
    <div className='flex border my-5 p-5 justify-between w-full'>
        <div className='    w-full '>{title}</div>
        <DeleteForm id={id} />
    </div>
  )
}

export default TaskList