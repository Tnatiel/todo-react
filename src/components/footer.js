

export function Footer({itemsLeft, onClearCompleted}) {
    
    return (
        <footer className="footer">
            <span className="todo-count"><strong>{itemsLeft}</strong> items left</span>
            <button onClick={onClearCompleted} className="clear-completed">Clear completed</button>
        </footer>
    )
}