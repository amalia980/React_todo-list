import { useState, useRef, useEffect } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {

  const [todos, setTodos] = useState([]);
  const userInput = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) (setTodos(storedTodos))
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }


  const addTodo = (e) => {
   const data = userInput.current.value
   if (data === "") return 
   setTodos(prevTodos => {
     return [...prevTodos, {id: Math.floor(Math.random() * 100) + 1, name: data, complete: false}]
   })
   userInput.current.value = null;//clear the input after added todo
  }

  function deleteTodo() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <input ref={userInput} type="text"/>
            <button onClick={addTodo}>Add</button>
            <button onClick={deleteTodo}>Clear</button>
            <div>{todos.filter(todo => !todo.complete).length} left to do</div>
      <ToDoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
