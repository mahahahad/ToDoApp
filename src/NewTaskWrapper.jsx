import React, { useRef, useState, useEffect } from 'react' ;
import TaskList from './TaskList.jsx'                      ;
import Task from './Task.jsx'                              ;

/*
	* New task gets added and stored somewhere
	* This task gets added to a TaskList element which is then re rendered and added to the App
*/

function NewTaskWrapper({ tasks, setTasks }) {
	const [newTaskName, setNewTaskName] = useState('');
	const handleChange = (event) => {
		setNewTaskName(event.target.value);
	};
	const handleClick = () => {
		// const newTask = <Task key={tasks.length} id={tasks.length} name={newTaskName} tasks={tasks} setTasks={setTasks} />;
		const newTask = {
			key: tasks.length,
			id: tasks.length,
			name: newTaskName
		};
		setTasks(prevTasks => [newTask, ...prevTasks]);
		setNewTaskName('');
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		handleClick();
	};
	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);
	return (
		<form onSubmit={handleSubmit} className="new-task-wrapper">
			<input 
				name="new-task-input"
				type="text"
				placeholder="New Task"
				value={newTaskName}
				onChange={handleChange} />
			<button type="submit">Add</button>
		</form>
	);
}

export default NewTaskWrapper;
