import { TodosList } from "./todolist";
import { useState } from "react";

export function ToggleAll({ tasks, onDeleteTodo ,onToggleAll, onDoubleClick, onMarkCompleted }, ) {


    const [ checked, setChecked ] = useState(Boolean)

    function handleToggleAll() {
        setChecked(!checked)
        onToggleAll(!checked);
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
                onDoubleClick={onDoubleClick}
                onMarkCompleted={onMarkCompleted}
                
                />
        </section>
    );
}
