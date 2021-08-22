import React from 'react';

function TodoItem({ todo, handleChangeProps, deleteTodo }) {
    return (
        <li>
            <input
                type='checkbox'
                checked={todo.completed}
                onChange={() => handleChangeProps(todo.id)}
            />
            {todo.title}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    )
}

export default TodoItem;