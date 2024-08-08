import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Filter from './Filter';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');

    const addTodo = (text) => {
        setTodos([...todos, { id: Date.now(), text, completed: false }]);
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const clearTodos = () => {
        setTodos([]);
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });

    return (
        <div className="todo-app">
            <h1>#todo</h1>
            <Filter filter={filter} setFilter={setFilter} />
            <TodoForm addTodo={addTodo} />
            <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            <button onClick={clearTodos}>Clear All</button>
        </div>
    );
};

export default TodoApp;
