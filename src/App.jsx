import { useState, useEffect } from 'react'
import './App.css'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'


function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('he cambiado el contador')
  }, [count])


  function incCount(val) {
    setCount(count + val)
  }

  return (
    <div className='bg-zinc-300 h-screen'>
      <div className='container mx-auto p-10'>
        <div>Contador: {count}</div>
        <TaskForm />
        <div><TaskList name={count}
          countFunc={incCount}
        />
        </div></div>
    </div>
  )
}

export default App
