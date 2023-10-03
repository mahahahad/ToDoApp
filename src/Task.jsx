import React, { useState } from 'react'

/*
	* A Task element contains a name as well as a key
	* TaskList = [<Task key="" name="" />]
	* Key property will help identify a task and modify it
	* Task can also contain methods like delete and edit passed in as props
*/
function Task(props) {
	const [taskState, setTaskState] = useState("Incomplete");
	const handleClick = () => {
		if (taskState === "Complete") setTaskState("Incomplete");
		else setTaskState("Complete");
	};
	const handleDelete = () => {
		const filteredTasks = props.tasks.filter(index => index !== props.key);
		props.setTasks(filteredTasks);
	};
	return (
		<div className="task" onClick={handleClick}>
			<p className={`task-title ${taskState}`}>{props.name}</p>
			<div className="task-actions">
				<button onClick={handleDelete} className="btn--red">Delete</button>
			{
				//<button onClick={handleClick}>Complete</button>
			}
			</div>
		</div>
	);
}

export default Task;
