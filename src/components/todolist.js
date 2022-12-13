
import React from 'react';
import { useContext } from 'react';
import { ListContext } from '../providers/list-context';
import { DestroyButton } from '../styled-components/DestroyButton';
import { ListItemStyle } from '../styled-components/ListItemStyle' 

export function TodosList() {

  const todoApi = useContext(ListContext)

  function handleEditTask(event, item) {
    if (event.key === 'Enter' && event.target.value.length > 0) {
      const newTitle = event.target.value
      todoApi.editTodo(item.id, newTitle) 
      event.target.value = ''
    }
  }

    return (
        <ul className="todo-list">
          {
            todoApi.todos.map( todo => (
              
              <ListItemStyle key={todo.id} className={`${todo.edit === true ? 'editing': ''} ${todo.completed === true ? 'completed': ''}`}>
                <div className="view">
                  <input
                    name="checkbox" 
                    className="toggle"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => todoApi.markAsCompleted(todo)}
                    />
                  <label onDoubleClick={() => todoApi.inputEditMode(todo)} >{todo.title}</label>
                  <DestroyButton onClick={() => todoApi.removeTodo(todo.id)} className="destroy"/>
                </div>
                <input onKeyUp={(event) => handleEditTask(event, todo)} className="edit" autoFocus />
              </ListItemStyle>
          ))}
        </ul>
    );
  }