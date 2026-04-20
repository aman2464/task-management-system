import React from 'react'; 
import { updateTaskStatus, deleteTask } from '../services/api';

const TaskList = ({ tasks, refreshTasks }) => {

    
    const handleComplete = async (id) => {
        try {
            await updateTaskStatus(id); 
            refreshTasks(); 
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };

  
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this task?")) {
            try {
                await deleteTask(id); 
                refreshTasks();
            } catch (error) {
                console.error("Error deleting task:", error);
            }
        }
    };

    return (
        <div className="mt-4">
            <h4 className="mb-3 text-secondary">Tasks List</h4>
            
            {tasks.length === 0 ? (
                <div className="alert alert-info">No tasks found. Add one above!</div>
            ) : (
                <div className="list-group">
                    {tasks.map((task) => (
                        <div 
                            key={task._id} 
                            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center shadow-sm mb-3 rounded border"
                        >
                            <div style={{ maxWidth: '70%' }}>
                                <h5 className={`mb-1 ${task.status === 'Completed' ? 'text-decoration-line-through text-muted' : ''}`}>
                                    {task.title}
                                </h5>
                                <p className="mb-1 text-muted small">{task.description}</p>
                                <small className="text-secondary">
                                    Created: {new Date(task.createdAt).toLocaleDateString()}
                                </small>
                                <div className="mt-2">
                                    <span className={`badge rounded-pill ${task.status === 'Completed' ? 'bg-success' : 'bg-warning text-dark'}`}>
                                        {task.status}
                                    </span>
                                </div>
                            </div>

                            <div className="d-flex flex-column gap-2">
                                
                                {task.status === 'Pending' && (
                                    <button 
                                        className="btn btn-sm btn-success" 
                                        onClick={() => handleComplete(task._id)}
                                    >
                                        Mark Done
                                    </button>
                                )}
                                <button 
                                    className="btn btn-sm btn-outline-danger" 
                                    onClick={() => handleDelete(task._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TaskList;