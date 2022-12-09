
import './App.css';
import {Header} from './components/header';
import {ToggleAll} from './components/main';
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

  useEffect(() => {
    
    setTodos(todos)
  }, [todos])


  const addTodo = (title) => {
    const newTodos = todos.concat([{ id: Date.now(), title, completed: false, edit: false}]);
    setTodos(newTodos)
  }

  const removeTodo = (id) => {
    const completedTodos = todos.filter( currentTodo => currentTodo.id !== id);
    setTodos(completedTodos);
  }

  const clearAllCompleted = () => {
    const completedTodos =  todos.filter( currentTodo => !currentTodo.completed);
    setTodos(completedTodos);
  }

  const toggleAllItems = (checkedValue) => {
    const allTodos = todos.map( todo => ({...todo, completed: checkedValue}));
    setTodos(allTodos);
  }

  const inputEditMode = (item) => {
    todos.map( todo => todo.edit = false);
    item.edit = true;
    console.log(todos)
    setTodos(todos)
    // const editUpdatedList = todos.filter( todo => !todo.edit)
    // console.log(editUpdatedList)
  }

  // todo: BONUS THINK ABOUT EDIT IN PLACE (DOUBLE CLICK TO VHANGE ITEM)

  return (
    
    <section className="todoapp">

    <Header 
      mainTitle={appTitle} 
      onAddItem={addTodo} 
      
      />

    <ToggleAll 
      tasks={todos}  
      onDeleteTodo={removeTodo} 
      onToggleAll={toggleAllItems}
      onDoubleClick={inputEditMode}
      />

    <Footer 
      onClearCompleted={clearAllCompleted} 
      itemsLeft={noneCompletedTodos} 
      />
 
    </section>
  );
}
export default App;
