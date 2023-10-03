import React, { useRef, useState } from 'react'
import TaskList from './TaskList.jsx'
import Task from './Task.jsx'

/*
	* New task gets added and stored somewhere
	* This task gets added to a TaskList element which is then re rendered and added to the App
*/

function NewTaskWrapper(props) {
	const [newTaskName, setNewTaskName] = useState('');
	const handleChange = (event) => {
		setNewTaskName(event.target.value);
	};
	const handleClick = () => {
		const newTask = <Task key={props.tasks.length} name={newTaskName} tasks={props.tasks} setTasks={props.setTasks} />;
		props.setTasks([...props.tasks, newTask]);
		setNewTaskName('');
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		handleClick();
	};
	return (
		<form onSubmit={handleSubmit} className="new-task-wrapper">
			<input 
				type="text"
				placeholder="New Task"
				value={newTaskName}
				onChange={handleChange} />
			<button onClick={handleClick}>Add</button>
		</form>
	);
}

export default NewTaskWrapper;
