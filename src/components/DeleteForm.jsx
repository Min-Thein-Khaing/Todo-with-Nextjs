"use client"

import deleteTasks from '@/actions/deleteTasks'
import React, { useActionState } from 'react'

const DeleteForm = ({id}) => {
    const [state,formAction,isPending] = useActionState(deleteTasks)
    console.log(state)

  return (
    <form action={formAction}>
        <input type="hidden"  name='id' value={id} />
        <button type='submit' disabled={isPending} className='text-red-500 underline underline-offset-1'>
            {
                isPending ? "loading..." : "delete"
            }
        </button>
    </form>
  )
}

export default DeleteForm