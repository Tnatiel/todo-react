// import {useState} from 'react'
export function TodosList({ todos, onDeleteTodo, onDoubleClick, onMarkCompleted, onEditInput }) {

  // const [focus, setFocus] = useState(false)


  function handleEditTask(event, item) {
    if (event.key === 'Enter' && event.target.value.length > 0) {
      const newTitle = event.target.value
      onEditInput(item.id, newTitle) 
      event.target.value = ''
      
    }
}
    return (
        <ul className="todo-list">
          {
            todos.map( item => (
              <li key={item.id} className={`${item.edit === true ? 'editing': ''} ${item.completed === true ? 'completed': ''}`}>
                <div className="view">
                  <input
                    name="checkbox" 
                    className="toggle"
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => onMarkCompleted(item)}
                    />
                  <label onDoubleClick={() => onDoubleClick(item)} >{item.title}</label>
                  <button onClick={() => onDeleteTodo(item.id)} className="destroy"/>
                </div>
                <input onKeyUp={(event) => handleEditTask(event, item)} className="edit"/>
              </li>
          ))}
        </ul>
    );
  }