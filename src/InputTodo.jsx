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
        <form onSubmit={onSubmit} className='form-container'>
            <input type="text"
                   className="input-text"
                   placeholder='Add todo...'
                   value={inputText.title}
                   name='title'
                   onChange={(e) => setInputText({
                       ...inputText, [e.target.name]: e.target.value
                   })}/>
            <input className="input-submit" type="submit" placeholder='Add'/>
        </form>
    )
}

export default InputTodo;