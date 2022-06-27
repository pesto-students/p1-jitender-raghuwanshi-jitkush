import React, {useState, useRef , useEffect} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value: '')


    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = event => {
        setInput(event.target.value)
    }
    
    const handleSubmit = event => {
        event.preventDefault();
        //
         props.onSubmit({
             id:Math.floor(Math.random() * 10000),
             //this is just a property of the object and ''text' can be named anything
             text:input,
         });
        setInput('');
    }

    return(
        //onSubmission is a predefined function which we are overriding to give an object when onsubmit is called. check????
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
        </form>
    )
}

export default TodoForm;