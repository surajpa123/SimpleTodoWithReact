import React from "react";
const Form = ({setInput,inputT,todos,setTodos}) => {
    const inputHandeler = (e)=>{
        setInput(e.target.value)
    }
const SubmitTodo = (e)=>{
    e.preventDefault();
setTodos([
    ...todos,{text: inputT ,completed:false, id: Math.random()*1000}
])
setInput('')
    }
  return (
    <form>
    <input value={inputT} onChange={inputHandeler} type="text" className="todo-input" />
    <button onClick={SubmitTodo} className="todo-button" type="submit">
      <i className="fas fa-plus-square"></i>
    </button>
    
  </form>
  )
}

export default Form