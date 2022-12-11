import React from 'react';
import { useContext } from 'react';
import { ListContext } from '../providers/list-context';


export function Header({mainTitle}) {

    const {addTodo, exitEdit} = useContext(ListContext)

    function handleTaskInput(event) {
        if (event.key === 'Enter' && event.target.value.length > 0) {
            addTodo(event.target.value)
            event.target.value = '';
        }
    }
    
    return (
        <header className="header">
            <h1>{mainTitle}</h1>
            <input onClick={exitEdit} onKeyUp={handleTaskInput} className="new-todo"
                placeholder="What needs to be done?"
                autoFocus />
        </header>
    )
}
