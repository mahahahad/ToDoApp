import React from 'react'
import Task from './Task'

function TaskList({ tasks, setTasks }) {
	const emptyState = <p className="no-tasks">You have no tasks</p>;
	if (!tasks.length)
		return emptyState;
	return (
		<div className="task-list">
			{
				tasks.map(task=> {
					return <Task name={task.name} key={task.key} id={task.id} tasks={tasks} setTasks={setTasks} />
				})
			}
		</div>
	)
}

export default TaskList;
