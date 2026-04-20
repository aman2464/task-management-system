const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) { res.status(500).send('Server Error'); }
};


exports.createTask = async (req, res) => {
    try {
        const newTask = new Task(req.body);
        const task = await newTask.save();
        res.json(task);
    } catch (err) { res.status(500).send('Server Error'); }
};


exports.updateTask = async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id, 
            { status: 'Completed' }, 
            { new: true }
        );
        res.json(updatedTask);
    } catch (err) { res.status(500).send('Server Error'); }
};

exports.deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Task removed' });
    } catch (err) { res.status(500).send('Server Error'); }
};