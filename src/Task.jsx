import React, { useState } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'

/*
	* A Task element contains a name as well as a key
	* TaskList = [<Task key="" name="" />]
	* Key property will help identify a task and modify it
	* Task can also contain methods like delete and edit passed in as props
*/
function Task({id, name, tasks, setTasks }) {
	const [taskState, setTaskState] = useState("Incomplete");
	const handleClick = () => {
		taskState === "Complete" ? setTaskState("Incomplete") : setTaskState("Complete");
	};
	const handleDelete = () => {
		const filteredTasks = tasks.filter(index => index !== id);
		setTasks(filteredTasks);
	};
	const handleEdit = () => {
		console.log("Cheese");

	};
	return (
		<div className="task" onClick={handleClick}>
			<p className={`task-title ${taskState}`}>{name}</p>
			<div className="task-actions">
				<button onClick={handleDelete} className="btn--red"><AiFillDelete /></button>
				<button onClick={handleEdit} className="btn"><AiFillEdit /></button>
			</div>
		</div>
	);
}

Task.defaultProps = {
	id: undefined,
	name: '',
	tasks: [],
	setTasks: undefined
}

export default Task;
