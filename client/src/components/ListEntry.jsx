import React from 'react';

const ListEntry = (props) => (
    <div>
        <span>{props.todo.name}</span> <span>Priority: {props.todo.priority}</span>
        <button onClick={() => props.deleteData(props.todo._id)}>Delete</button>
        <button onClick={() => {props.updateData(props.index, -1)}}>-</button>
        <button onClick={() => {props.updateData(props.index, 1)}}>+</button>
    </div>
);

export default ListEntry;