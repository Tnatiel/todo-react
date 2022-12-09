
export function TodosList({ items, onDeleteTodo, isChecked, onDoubleClick, onMarkCompleted }) {
  

    function handleRemove(id) {
        onDeleteTodo(id);
    }
    
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
                    defaultValue={isChecked}
                    onChange={() => onMarkCompleted(item)}
                    />
                  <label onDoubleClick={() => onDoubleClick(item)} >{item.title}</label>
                  <button onClick={() => handleRemove(item.id)} className="destroy"/>
                </div>
                <input className="edit"/>
              </li>
          ))}
        </ul>
    );
  }