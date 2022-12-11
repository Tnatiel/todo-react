
import React from 'react';

export function TodosList({children}) {

  const [todos, removeTodo, inputEditMode, markAsCompleted, editTodo] = children

  function handleEditTask(event, item) {
    if (event.key === 'Enter' && event.target.value.length > 0) {
      const newTitle = event.target.value
      editTodo(item.id, newTitle) 
      event.target.value = ''
    }
  }

  function handleDoubleClick(event, todo) {
    todo.edit = true
    inputEditMode(todo)
  }
    return (
        <ul className="todo-list">
          {
            todos.map( todo => (
              <li key={todo.id} className={`${todo.edit === true ? 'editing': ''} ${todo.completed === true ? 'completed': ''}`}>
                <div className="view">
                  <input
                    name="checkbox" 
                    className="toggle"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => markAsCompleted(todo)}
                    />
                  <label onDoubleClick={(event) => handleDoubleClick(event, todo)} >{todo.title}</label>
                  <button onClick={() => removeTodo(todo.id)} className="destroy"/>
                </div>
                <input onKeyUp={(event) => handleEditTask(event, todo)} className="edit" autoFocus />
              </li>
          ))}
        </ul>
    );
  }