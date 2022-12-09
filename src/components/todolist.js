export function TodosList({children}) {

  function handleEditTask(event, item) {
    if (event.key === 'Enter' && event.target.value.length > 0) {
      const newTitle = event.target.value
      children[2](item.id, newTitle) 
      event.target.value = ''
      
    }
}
    return (
        <ul className="todo-list">
          {
            children[0].map( task => (
              <li key={task.id} className={`${task.edit === true ? 'editing': ''} ${task.completed === true ? 'completed': ''}`}>
                <div className="view">
                  <input
                    name="checkbox" 
                    className="toggle"
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => children[3](task)}
                    />
                  <label onDoubleClick={() => children[4](task)} >{task.title}</label>
                  <button onClick={() => children[1](task.id)} className="destroy"/>
                </div>
                <input onKeyUp={(event) => handleEditTask(event, task)} className="edit"/>
              </li>
          ))}
        </ul>
    );
  }