// import {useState} from 'react'
export function TodosList({tasks, onDeleteTodo, onDoubleClick, onMarkCompleted, onEditInput }) {

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
            tasks.map( task => (
              <li key={task.id} className={`${task.edit === true ? 'editing': ''} ${task.completed === true ? 'completed': ''}`}>
                <div className="view">
                  <input
                    name="checkbox" 
                    className="toggle"
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onMarkCompleted(task)}
                    />
                  <label onDoubleClick={() => onDoubleClick(task)} >{task.title}</label>
                  <button onClick={() => onDeleteTodo(task.id)} className="destroy"/>
                </div>
                <input onKeyUp={(event) => handleEditTask(event, task)} className="edit"/>
              </li>
          ))}
        </ul>
    );
  }