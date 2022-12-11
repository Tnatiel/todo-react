import React from 'react';
import './App.css';
import {Header} from './components/header';
import {ToggleAll} from './components/toggle-all';
import {Footer} from './components/footer';
import { TodosList } from './components/todolist';
import { useTodos } from './hooks/useTodos';


function App() {
  
  const appTitle = 'Todos App';
  const {noneCompletedTodos, exitEdit, editTodo, removeTodo, todos, addTodo, clearAllCompleted, markAsCompleted, inputEditMode, toggleAllItems} = useTodos()
  
  // todo: BONUS THINK ABOUT EDIT IN PLACE (DOUBLE CLICK TO VHANGE ITEM)
  return (
    
    <section className="todoapp">

    <Header
      mainTitle={appTitle} 
      onAddItem={addTodo} 
      onExitEdit={exitEdit}
      
      />
    
    <ToggleAll onToggleAll={toggleAllItems} >
      <TodosList>
        {todos}
        {removeTodo}
        {inputEditMode}
        {markAsCompleted}
        {editTodo}
      </TodosList>
    </ToggleAll>
      
    
    <Footer
      onClearCompleted={clearAllCompleted} 
      itemsLeft={noneCompletedTodos} 
      />

    </section>
  );
}
export default App;
