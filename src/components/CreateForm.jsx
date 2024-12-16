"use client";

import createTasks from '@/actions/createTasks';
import React, { useActionState } from 'react'

const CreateForm = () => {
    const [state,formAction,isPending] = useActionState(createTasks)
    console.log(state)
  return (
    <form className='mt-5' action={formAction}>
        <div className=' flex justify-center items-center w-[400px]'>
            <input type="text" required className='border  grow rounded-md px-4 py-1 border-zinc-400' name='title' />
            <button type="submit" disabled={isPending} className='block disabled:opacity-40 disabled:text-black text-white active:scale-95 rounded-md scale:100 duration-300 bg-zinc-400 border px-4 py-1'>
                {isPending ? "Loading....." : "Create"}
            </button>
        </div>
    </form>
  )
}

export default CreateForm