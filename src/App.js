import logo from './logo.svg';
import './App.css';
// import 'src\components\header.js';
import Header from './components/header';

function App() {
  return (
    
    <section class="todoapp">

    <Header/>

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

    <footer class="footer">
        <span class="todo-count"><strong>0</strong> items left</span>
        <button class="clear-completed">Clear completed
        </button>
    </footer>

    </section>
  );
}

export default App;
