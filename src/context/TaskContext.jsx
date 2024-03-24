import { createContext, useState, useEffect } from "react"
import { tasks as data } from '../data/tasks'

export const TaskContext = createContext()

export function TaskContextProvider(props) {
  const [allTasks, setAllTasks] = useState([])


  useEffect(() => {
    setAllTasks(data)
  }, [])

  function createTask(pTask) {
    const newTask = {
      title: pTask.title,
      id: allTasks.length,
      description: pTask.desc
    }
    setAllTasks([...allTasks, newTask])
  }

  function removeTask(pId) {
    console.log(pId)
    const newAllTasks =
      allTasks.filter(t => { return t.id != pId })
    setAllTasks(newAllTasks)
  }

  return (
    <TaskContext.Provider value={{
      tasks: allTasks,
      deleteTask: removeTask, createTask: createTask
    }}>
      {props.children}
    </TaskContext.Provider>
  )
}