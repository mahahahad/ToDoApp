import React, { useState, useEffect } from 'react';
import Task from './Task.jsx';
import TaskList from './TaskList.jsx';
import NewTaskWrapper from './NewTaskWrapper.jsx';
import './App.css';

function App() {
	const [tasks, setTasks] = useState(() => {
		const tasks = JSON.parse(localStorage.getItem("tasks"));
		if (!tasks) return [];
		return tasks;
	});
	return (
		<div className="App">
			<h1 className="App-title">ToDo List</h1>
			<NewTaskWrapper tasks={tasks} setTasks={setTasks}/>
			<TaskList tasks={tasks} setTasks={setTasks}/>
		</div>
	)
}

export default App
