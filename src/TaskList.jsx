import React from 'react'
import Task from './Task'

function TaskList({ tasks, setTasks }) {
	const emptyState = <p className="no-tasks">You have no tasks</p>
	return (
		<div className="task-list">
			{
				tasks.map((task, index) => {
					return <Task name={task.name} key={index} id={index} tasks={tasks} setTasks={setTasks} />
				})
			}
		</div>
	)
}

export default TaskList;
