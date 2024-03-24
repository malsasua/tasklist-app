import { useState, useContext } from 'react'

import { TaskContext } from '../context/TaskContext';

function TaskForm({ l }) {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const { createTask } = useContext(TaskContext);

  function miSubmit(e) {
    e.preventDefault();
    createTask({ title, desc })
    setTitle('')
    setDesc('')
  }
  return (
    <div className='max-w-md mx-auto'>
      <form onSubmit={(e) => {
        miSubmit(e)
      }} className="bg-slate-400 p-10 mb-4 rounded-xl">
        <input className='bg-slate-300 p-3 w-full mb-2  rounded-md' placeholder="Escribe tu tarea"
          onChange={e => setTitle(e.target.value)}
          value={title}
          autoFocus />
        <textarea className='bg-slate-300 p-3 w-full mb-2  rounded-md'
          placeholder="esc"
          onChange={e => setDesc(e.target.value)}
          value={desc}></textarea>
        <button className='bg-indigo-500 px-3 py-1 rounded-md text-white'>Guardar</button>
      </form>
    </div >
  )
}

export default TaskForm