import { useState } from "react";
export function TodosList({ items, onDeleteTodo, isChecked }) {
    
  const [edit, setEdit] = useState(Boolean)
  

    function handleRemove(id) {
        onDeleteTodo(id);
    }
    
    
    function handleDoubleClick(event) {
      setEdit(!edit)
      const editedTodo = items.filter( item => item.edit === true)
      console.log(editedTodo)
      console.log(event.target.parentElement.parentElement)
      event.target.parentElement.parentElement.className = "editing"
    }

    return (
        <ul className="todo-list">
          {
            items.map( item => (
              <li key={item.id} className={ item.edit === true ? 'editing': ''}>
                <div className="view">
                  <input
                    name="checkbox" 
                    className="toggle"
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => {return}}
                    />
                  <label onDoubleClick={handleDoubleClick} >{item.title}</label>
                  <button onClick={() => handleRemove(item.id)} className="destroy"/>
                </div>
                <input className="edit"/>
              </li>
          ))}
        </ul>
    );
  }