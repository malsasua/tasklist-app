import React from 'react'
import { useContext } from 'react'
import MiBoton from './MiBoton'
import MiBoton2 from './MiBoton2'
import { TaskContext } from '../context/TaskContext'


function TaskCard({ name, countFunc, task }) {
  const { deleteTask } = useContext(TaskContext)

  return (
    <div className="bg-gray-800 text-white p-2 rounded-md">
      <h1 className="text-xl font-bold capitalize">
        {task.title}
      </h1>
      <h2>
        < MiBoton name={name}
          miFunc={countFunc} />

        < MiBoton2 name='borrar task'
          miFunc={deleteTask}
          id={task.id} />
        <div className='text-gray-500 text-sm'>
          {task.description}
        </div>
      </h2>
    </div>
  )
}

export default TaskCard