import logo from './logo.svg';
import './App.css';
// import 'src\components\header.js';
import Header from './components/header';
import Main from './components/main'

function App() {
  return (
    
    <section class="todoapp">

    <Header />

    <Main />

    <footer class="footer">
        <span class="todo-count"><strong>0</strong> items left</span>
        <button class="clear-completed">Clear completed
        </button>
    </footer>

    </section>
  );
}

export default App;
