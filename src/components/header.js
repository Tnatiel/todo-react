import React from 'react';
import { useContext, useRef, useEffect } from 'react';
import { ListContext } from '../providers/list-context';


export function Header({mainTitle}) {

    const {addTodo, exitEdit} = useContext(ListContext)

    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus();
      }, [])

    function handleTaskInput(event) {
        // console.log(event.key)
        // console.log(event.target.value.length)
        if (event.key === 'Enter' && event.target.value.length > 0) {
            addTodo(event.target.value)
            event.target.value = '';
        }
    }
    
    return (
        <header className="header">
            <h1>{mainTitle}</h1>
            <input 
                className="new-todo"
                ref={inputRef}  
                onClick={exitEdit} 
                onKeyUp={handleTaskInput} 
                placeholder="What needs to be done?"
                autoFocus />
        </header>
    )
}
