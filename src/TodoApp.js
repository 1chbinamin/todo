import React, {useState, useEffect} from 'react';
import Header from './Header';
import TodosList from './TodosList';

function TodoApp() {
    const [todos, setTodos] = useState([]);

    function handleChange(id) {
        let todosAfterUpdate = todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }

            return todo;
        });

        setTodos(todosAfterUpdate);
    }

    function deleteTodo(id) {
        let todosAfterDelete = todos.filter((todo) => {
            return todo.id !== id;
        });

        setTodos(todosAfterDelete);
    }

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then((res) => res.json())
            .then(setTodos)
            .catch(console.error);
    }, [])
    return (
        <>
            <Header/>
            <TodosList
                todos={todos}
                handleChangeProps={handleChange}
                deleteTodo={deleteTodo}
            />
        </>
    )
}

export default TodoApp;