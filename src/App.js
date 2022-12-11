import React from 'react';
import './App.css';
import {Header} from './components/header';
import {ToggleAll} from './components/toggle-all';
import {Footer} from './components/footer';
import { TodosList } from './components/todolist';
import { useTodos } from './hooks/useTodos';
import { ListContext } from './providers/list-context';


function App() {
  
  const appTitle = 'Todos App';
  const todoApi = useTodos()

  return (
    <ListContext.Provider value={todoApi}>
      <section className="todoapp">

      <Header
        mainTitle={appTitle}         
        />
      
      <ToggleAll />
      <TodosList />
        
      
      <Footer/>

      </section>
    </ListContext.Provider>
  );
}
export default App;
