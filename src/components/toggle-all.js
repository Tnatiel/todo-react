import { TodosList } from "./todolist";

export function ToggleAll({ tasks, onDeleteTodo ,onToggleAll, onDoubleClick, onMarkCompleted, onAddItem, onEdit }, ) {

    
    return (
        <section className="main">
            <input className="toggle-all"
                onChange={(event) => onToggleAll(event.target.checked)}
                type="checkbox"
                />
            <TodosList 
                onDeleteTodo={onDeleteTodo} 
                todos={tasks}
                onDoubleClick={onDoubleClick}
                onMarkCompleted={onMarkCompleted} 
                onAdd={onAddItem}
                onEditInput={onEdit}
                />
        </section>
    );
}
