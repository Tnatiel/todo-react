import React from 'react';
import './App.css';
import { TodosApp } from './components/TodoApp';


function App() {
  
  
  return (
    <>
    
    <TodosApp appTitle={'Todos List'}/>
    <TodosApp appTitle={'Shop List'}/>
    <TodosApp appTitle={'Wish List'}/>
      
    </>
  );
}
export default App;
