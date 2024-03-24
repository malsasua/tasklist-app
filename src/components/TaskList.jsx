import { useContext } from 'react'
import TaskCard from './TaskCard'
import { TaskContext } from '../context/TaskContext'

function handlerClick() {

}


function TaskList({ name, countFunc }) {
	/*
	tasks.map(t => {
			return <div>t.title</div>
	}
	)*/

	const { tasks } = useContext(TaskContext)
	return (
		<div className="grid grid-cols-4 gap-2">
			{tasks.map((t, i) => (
				<TaskCard
					key={t.id}
					name={t.id}
					countFunc={countFunc}
					task={t} />
			))}
		</div >
	)
}

export default TaskList