
export function TodosList({ items, onDeleteTodo, onDoubleClick, onMarkCompleted }) {
    
    return (
        <ul className="todo-list">
          {
            items.map( item => (
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
                <input className="edit"/>
              </li>
          ))}
        </ul>
    );
  }