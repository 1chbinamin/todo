import React, {useState} from 'react';

function InputTodo({addTodo}) {
    const initInputText = {
        title: ''
    }

    const [inputText, setInputText] = useState(initInputText);

    function onSubmit(e) {
        e.preventDefault();
        addTodo(inputText.title);
        setInputText(initInputText);
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text"
                   placeholder='Add todo...'
                   value={inputText.title}
                   name='title'
                   onChange={(e) => setInputText({
                       ...inputText, [e.target.name]: e.target.value
                   })}/>
            <input type="submit" placeholder='Add'/>
        </form>
    )
}

export default InputTodo;