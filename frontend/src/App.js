import React, { useState, useEffect } from 'react';
import { fetchTasks } from './services/api';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
    const [tasks, setTasks] = useState([]);
    const [theme, setTheme] = useState('light');

    const loadTasks = async () => {
        try {
            const response = await fetchTasks();
            setTasks(response.data);
        } catch (error) {
            console.error("System was unable to retrieve tasks:", error);
        }
    };

    useEffect(() => {
        loadTasks();
    }, []);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <div data-bs-theme={theme} className="min-vh-100 bg-body text-body">
            <div className="container py-5">
                
                <header className="d-flex justify-content-between align-items-center mb-5">
                    <h1 className="h2 fw-bold text-primary">Task Management System</h1>
                    <button 
                        className={theme === 'light' ? 'btn btn-outline-dark' : 'btn btn-outline-light'} 
                        onClick={toggleTheme}
                    >
                        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                    </button>
                </header>

                <main className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        
                        <section className="card shadow-sm mb-4 border-0">
                            <div className="card-body p-4">
                                <h2 className="h5 card-title mb-4">Create New Task</h2>
                                <TaskForm refreshTasks={loadTasks} />
                            </div>
                        </section>

                        <section className="card shadow-sm border-0">
                            <div className="card-body p-4">
                                <h2 className="h5 card-title mb-4">Current Tasks</h2>
                                <TaskList tasks={tasks} refreshTasks={loadTasks} />
                            </div>
                        </section>
                        
                    </div>
                </main>

                <footer className="text-center mt-5 text-secondary border-top pt-3">
                    <p className="small">MERN Stack Technical Assessment | Task Manager Project</p>
                </footer>
            </div>
        </div>
    );
}

export default App;