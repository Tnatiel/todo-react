

export function Footer({itemsLeft}) {
    
    return (
        <footer className="footer">
            <span className="todo-count"><strong>{itemsLeft}</strong> items left</span>
            <button className="clear-completed">Clear completed
            </button>
        </footer>
    )
}