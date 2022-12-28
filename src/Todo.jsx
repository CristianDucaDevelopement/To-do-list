import React from 'react'
import './main.css'
const Todo = ({ todo, toggleTodo }) => {
  function handleTodoClick() {
    toggleTodo(todo.id)
  }
  
  return (
    <div>
      <label className='flex'>
        <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
        {todo.name}
      </label>
    </div>
  )
}

export default Todo