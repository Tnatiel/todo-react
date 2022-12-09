import { TodosList } from "./todolist";
import { useState } from "react";

export function ToggleAll({ tasks, onDeleteTodo ,onToggleAll, onDoubleClick, onMarkCompleted }, ) {


    return (
        <section className="main">
            <input className="toggle-all"
                onChange={(event) => onToggleAll(event.target.checked)}
                type="checkbox"

                />
            <TodosList 
                onDeleteTodo={onDeleteTodo} 
                items={tasks}
                onDoubleClick={onDoubleClick}
                onMarkCompleted={onMarkCompleted} 
                />
        </section>
    );
}
