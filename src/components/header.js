import React from 'react';
import { useContext, useRef, useEffect } from 'react';
import { AuthContext } from '../providers/auth-context';
import { ListContext } from '../providers/list-context';


export function Header({mainTitle}) {
    const {addTodo, exitEdit} = useContext(ListContext)
    const todoiIputRef = useRef()
    const {role} = useContext(AuthContext) 

    useEffect(() => {
        todoiIputRef.current.focus();
      }, [])

    function handleTaskInput(event) {
        
        if (event.key === 'Enter' && event.target.value.length > 0) {
            if (role !== 'admin') {
                alert('You are not an admin')
                return
            }
            addTodo(event.target.value)
            event.target.value = '';
        }
    }
    
    return (
        <header className="header">
            <h1>{mainTitle}</h1>
            <input 
                className="new-todo"
                ref={todoiIputRef}  
                onClick={exitEdit} 
                onKeyUp={handleTaskInput} 
                placeholder="What needs to be done?"
                autoFocus />
        </header>
    )
}
