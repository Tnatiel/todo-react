
import './App.css';
import {Header} from './components/header';
import {Main} from './components/main';
import {Footer} from './components/footer';
import { useEffect, useState } from 'react';


function App() {

  const appTitle = 'Todos App';
  const [ todos, setTodos ] = useState([]);
  const [ noneCompletedTodos, setNoneCompletedTodos] = useState(0);
  
  
  // Events
  
  useEffect(() => {
    const unCompleted = todos.filter( todo => !todo.completed )
    setNoneCompletedTodos(unCompleted.length)
  }, [todos])


  const addTodo = (title) => {
    const newTodos = todos.concat([{ id: Date.now(), title, completed: false}]);
    setTodos(newTodos)
  }

  const removeTodo = (id) => {
    const completedTodos = todos.filter( currentTodo => currentTodo.id !== id);
    setTodos(completedTodos);
  
  }

  const clearAllCompleted = () => {
    const completedTodos =  todos.filter( currentTodo => currentTodo.completed === true);
    setTodos(completedTodos);
  }

  const toggleAllItems = (checkedValue) => {
    const allTodos = todos.map( todo => ({...todo, completed: checkedValue}));
    setTodos(allTodos);
  }


  // todo: where should we implement it?
  const markAsCompleted = () => {} // main


  // todo: pass title, placeholder to header
  // todo: pass item left to footer
  
  // todo: BONUS THINK ABOUT EDIT IN PLACE (DOUBLE CLICK TO VHANGE ITEM)

  return (
    
    <section className="todoapp">

    <Header 
      mainTitle={appTitle} 
      onAddItem={addTodo} 
      />

    <Main 
      tasks={todos}  
      onDeleteTodo={removeTodo} 
      onToggleAll={toggleAllItems}
      />

    <Footer 
      onClearCompleted={clearAllCompleted} 
      itemsLeft={noneCompletedTodos} 
      />
 
    </section>
  );
}
export default App;
