import React, {useState, useEffect} from 'react';
import Header from './Header';
import TodosList from './TodosList';
import InputTodo from './InputTodo';
import { v4 as uuidv4 } from "uuid";

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

    function addTodo(title) {
        setTodos([...todos, {
            id: uuidv4(),
            title: title,
            completed: false
        }]);
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
            <InputTodo addTodo={addTodo}/>
            <TodosList
                todos={todos}
                handleChangeProps={handleChange}
                deleteTodo={deleteTodo}
            />
        </>
    )
}

export default TodoApp;