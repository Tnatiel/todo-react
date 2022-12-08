import { TodosList } from "./todolist";
import { useState } from "react";

export function ToggleAll({ tasks, onDeleteTodo ,onToggleAll }, ) {


    const [ checked, setChecked ] = useState(Boolean)

    function handleToggleAll(event) {
        setChecked(!checked)
        onToggleAll(!checked);
        // console.log(`evt: ${event.target.checked}`);
        // console.log(`state: ${!checked}`);
        // console.log(tasks)
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
