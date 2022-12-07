
export function TodosList({ items, onDeleteTodo }) {
    

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
                    className="toggle"
                    type="checkbox"
                    defaultChecked={false}
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