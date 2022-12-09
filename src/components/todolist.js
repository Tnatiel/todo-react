export function TodosList({children}) {

  let [tasks, removeTodo, inputEditMode, markAsCompleted, editTodo] = children

  function handleEditTask(event, item) {
    if (event.key === 'Enter' && event.target.value.length > 0) {
      const newTitle = event.target.value
      editTodo(item.id, newTitle) 
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
                    onChange={() => markAsCompleted(task)}
                    />
                  <label onDoubleClick={() => inputEditMode(task)} >{task.title}</label>
                  <button onClick={() => removeTodo(task.id)} className="destroy"/>
                </div>
                <input onKeyUp={(event) => handleEditTask(event, task)} className="edit"/>
              </li>
          ))}
        </ul>
    );
  }