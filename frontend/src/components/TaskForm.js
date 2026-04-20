import React, { useState } from 'react';
import { addTask } from '../services/api';

const TaskForm = ({ refreshTasks }) => {
    const [task, setTask] = useState({ title: '', description: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!task.title) return alert("Title is required");
        await addTask(task);
        setTask({ title: '', description: '' });
        refreshTasks();
    };

    return (
        <form onSubmit={handleSubmit} className="p-3 bg-light rounded border">
            <input type="text" className="form-control mb-2" placeholder="Task Title" value={task.title} onChange={(e) => setTask({...task, title: e.target.value})} />
            <textarea className="form-control mb-2" placeholder="Description" value={task.description} onChange={(e) => setTask({...task, description: e.target.value})} />
            <button className="btn btn-primary w-100">Add Task</button>
        </form>
    );
};
export default TaskForm;