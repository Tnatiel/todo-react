import { useState } from "react";
import { TodosList } from "./todolist";

export function Main({ tasks, onDeleteTodo ,onToggleAll }) {
    const [ checked, setChecked ] = useState([])
    function handleToggleAll(event) {
    onToggleAll(event.target.checked);
    for (const todo of tasks) {
      setChecked(event.target.checked)
    }
  }

  return (
      <section className="main">
        <input className="toggle-all"
               onChange={handleToggleAll}
               type="checkbox"/>
        <TodosList 
            onDeleteTodo={onDeleteTodo} 
            items={tasks}/>
      </section>
  );
}
