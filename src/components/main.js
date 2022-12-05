export {}

export default function Main() {
    return (
        <section class="main">
        <input class="toggle-all"
              type="checkbox" />
        <ul class="todo-list">
            <li>
                <div class="view">
                    <input class="toggle"
                          type="checkbox" />
                    <label>Todo Title</label>
                    <button class="destroy" />
                </div>
                <input class="edit" />
            </li>
        </ul>
    </section>
    )
}