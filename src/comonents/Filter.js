import React from 'react';

const Filter = ({ filter, setFilter }) => {
    return (
        <div className="filter">
            <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
            <button onClick={() => setFilter('active')} className={filter === 'active' ? 'active' : ''}>Active</button>
            <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>Completed</button>
        </div>
    );
};

export default Filter;
