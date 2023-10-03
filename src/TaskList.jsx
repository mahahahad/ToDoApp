import React from 'react'
import Task from './Task'

function TaskList(props) {
	const emptyState = <p className="no-tasks">You have no tasks</p>
	return (
		<div className="task-list">
			{Object.keys(props.tasks).length === 0 ? emptyState : props.tasks}
		</div>
	)
}

export default TaskList;
