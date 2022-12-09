
import './App.css';
import {Header} from './components/header';
import {ToggleAll} from './components/toggle-all';
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

  const exitEdit = () => {
    const noEditTodos = todos.map(todo => ({...todo, edit: false}));
    setTodos(noEditTodos)
  }

  const addTodo = (title) => {
    const newTodos = todos.concat([{ id: Date.now(), title, completed: false, edit: false}]);
    setTodos(newTodos)
  }

  const editTodo = (id, title) => {
    const updatedList = todos.map( todo => id === todo.id ? {...todo, title, edit: false}: {...todo})
    setTodos(updatedList)
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
    const updatedList = todos.map( todo => todo.id === item.id ? {...todo, edit: true} : {...todo, edit: false});
    setTodos(updatedList)
  }

  const markAsCompleted = (item) => {
    const currentCompletedState = item.completed
    const updatedList = todos.map( todo => todo.id === item.id ? {...todo, completed: !currentCompletedState} : {...todo});
    setTodos(updatedList)
  }

  // todo: BONUS THINK ABOUT EDIT IN PLACE (DOUBLE CLICK TO VHANGE ITEM)

  return (
    
    <section className="todoapp">

    <Header 
      mainTitle={appTitle} 
      onAddItem={addTodo} 
      onExitEdit={exitEdit}
      
      />

    <ToggleAll 
      tasks={todos}  
      onDeleteTodo={removeTodo} 
      onToggleAll={toggleAllItems}
      onDoubleClick={inputEditMode}
      onMarkCompleted={markAsCompleted}
      onAddItem={addTodo} 
      onEdit={editTodo}
      />

    <Footer
      onClearCompleted={clearAllCompleted} 
      itemsLeft={noneCompletedTodos} 
      />
 
    </section>
  );
}
export default App;
