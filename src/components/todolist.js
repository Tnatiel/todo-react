
export function TodosList({ items, onDeleteTodo, isChecked }) {
    
    function handleRemove(id) {
        onDeleteTodo(id);
    }

    return (
        <ul className="todo-list">
            
          {
            items.map( item => (
              <li key={item.id} className=''>
                <div className="view">
                  <input
                    name="checkbox" 
                    className="toggle"
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => {return}}
                    />
                  <label>{item.title}</label>
                  <button onClick={() => handleRemove(item.id)} className="destroy"/>
                </div>
                <input className="edit"/>
              </li>
          ))}
        </ul>
    );
  }