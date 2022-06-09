import React from 'react'

const Todo = ({text,todo,setTodos,todos}) => {

    // for delete
    const deletefun = ()=>{
        setTodos(todos.filter(el=> el.id !== todo.id))
    }

    const completed = ()=>{
     setTodos(todos.map((items)=>{
         if(items.id === todo.id){
             return {
                 ...items, completed: !items.completed
             }
         }
         return items;
     }))
    }

  return (
    <div className='todo'>
<li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
<button onClick={completed} className='complete-btn'><i className='fas fa-check'></i></button>
<button onClick={deletefun} className='trash-btn'><i className='fas fa-trash'></i></button>
    </div>
  )
}

export default Todo