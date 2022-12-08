import { TodosList } from "./todolist";
import { useState } from "react";

export function Main({ tasks, onDeleteTodo ,onToggleAll }) {
    const [ checked, setChecked ] = useState(Boolean)
    // useEffect(handleToggleAll)
    function handleToggleAll(event) {
        setChecked(event.target.checked)
        onToggleAll(event.target.checked);
    }
    
    return (
        <section className="main">
            <input className="toggle-all"
                onChange={handleToggleAll}
                type="checkbox"

                />
            <TodosList 
                onDeleteTodo={onDeleteTodo} 
                items={tasks}
                isChecked={checked}
                
                />
        </section>
    );
}
