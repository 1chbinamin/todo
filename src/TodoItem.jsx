import React from 'react';

function TodoItem({todo, handleChangeProps, deleteTodo}) {
    const completedStyle = {
        fontStyle: 'italic',
        color: '#c5e2d2',
        textDecoration: 'line-through'
    }

    return (
        <li className="todo-item">
            <div className='todo-container'>
                <div>
                    <input
                        type='checkbox'
                        checked={todo.completed}
                        onChange={() => handleChangeProps(todo.id)}
                    />
                    <span style={todo.completed ? completedStyle : null}>{todo.title}</span>
                </div>
                <div>
                    <button className="btn-style" onClick={() => deleteTodo(todo.id)}>Delete</button>
                </div>
            </div>
        </li>
    )
}

export default TodoItem;