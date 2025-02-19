import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add details"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button className='button-add' type="submit">Add</button>
        </form>
    );
};

export default TodoForm;
