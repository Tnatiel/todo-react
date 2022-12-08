

export function Header({mainTitle, onAddItem}) {
   
    function handleTaskInput(event) {
        if (event.key === 'Enter' && event.target.value.length > 0) {
            onAddItem(event.target.value)
            event.target.value = '';
        }
    }
    
    return (
        <header className="header">
            <h1>{mainTitle}</h1>
            <input onKeyUp={handleTaskInput} className="new-todo"
                placeholder="What needs to be done?"
                autoFocus />
        </header>
    )
}
