import React from 'react'
import Todo from './Todo';

 const ToDoList = (props) => {

    const {todos, toggleTodo} = props;

    return (
            todos.map(todo => {
                return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
            })
    )
}

export default ToDoList;