import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Form from './Components/Form'
import TodoList from './Components/TodoList'

function App() {
const [inputT,setInput] = useState("");
const [todos,setTodos] = useState([]);
  return (
    <div className="App">
<header>
  <h1>Todo List</h1>
  </header>   
  <Form todos={todos} inputT={inputT} setTodos={setTodos} setInput={setInput}/>
  <TodoList setTodos={setTodos} todos={todos}/>
   </div>
  )
}

export default App
