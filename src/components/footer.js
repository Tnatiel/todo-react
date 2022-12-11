import React, { useContext } from 'react';
import { ListContext } from '../providers/list-context';

export function Footer() {
    const {clearAllCompleted, noneCompletedTodos} = useContext(ListContext)
    return (
        <footer className="footer">
            <span className="todo-count"><strong>{noneCompletedTodos}</strong> items left</span>
            <button 
                onClick={clearAllCompleted} 
                className="clear-completed">
                {/*text:*/}Clear completed
            </button>
        </footer>
        )
    }