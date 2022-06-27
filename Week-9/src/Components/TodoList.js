import React, {useState} from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList(){
    const [todos, setTodo] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        // todo now has an object; todo.id,todo.text
        const newTodo = [todo, ...todos]
        setTodo(newTodo);
        console.log(todo,...todos);
    }

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
          return;
        }
    
        setTodo(prev => prev.map(item => (item.id === todoId ? newValue : item)));
      };

    const completedTodo = id => {
        let updateTodo = todos.map( todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodo(updateTodo);
        }

    const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);
        setTodo(removedArr);
      };

   

    return (
        <div>
            <h1>what do you wanna do today</h1>
            <TodoForm onSubmit={addTodo} />  
            <Todo 
            todos = {todos}
            completedTodo = {completedTodo}
            removeTodo ={removeTodo}
            updateTodo = {updateTodo}
            />
        </div>
    )
}

export default TodoList;