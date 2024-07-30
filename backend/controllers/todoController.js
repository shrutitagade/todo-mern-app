// backend/controllers/todoController.js
const Todo = require('../models/Todo');

exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createTodo = async (req, res) => {
    const { text } = req.body;
    try {
        const newTodo = new Todo({
            text
        });
        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateTodo = async (req, res) => {
    const { id } = req.params;
    const { text, completed } = req.body;
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(id, { text, completed }, { new: true });
        res.json(updatedTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteTodo = async (req, res) => {
    const { id } = req.params;
    try {
        await Todo.findByIdAndDelete(id);
        res.json({ message: 'Todo deleted' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
