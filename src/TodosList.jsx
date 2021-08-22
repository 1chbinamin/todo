import React from 'react';
import TodoItem from './TodoItem';

function TodosList({todos, handleChangeProps, deleteTodo}) {
    return (
        <ul>
            {
                todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        handleChangeProps={handleChangeProps}
                        deleteTodo={deleteTodo}
                    />
                ))
            }
        </ul>
    )
}

export default TodosList;