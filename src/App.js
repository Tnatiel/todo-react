import React, { useRef } from 'react';
import './App.css';
import { AppsList } from './components/apps-list';
// import { ListAdder } from './components/list-adder';
import { TodoApp } from './components/TodoApp';
import { useState } from 'react';


function App() {

  const [lists, setLists] = useState([])
  const listInputAdderRef = useRef()

  const addList = () => {
    const appId = Math.random() * 9999999999999
    console.log(listInputAdderRef.current.value)
    const newListApp =  <TodoApp mainTitle={listInputAdderRef.current.value} key={appId} />
    const newLists = lists.concat(newListApp)

    setLists(newLists)
    }

  return (
    <>

    <input ref={listInputAdderRef} type="text" placeholder='Whats the list name'/>
    <button onClick={addList}>ADD LIST</button>
    <AppsList items={lists}/>

    </>
  );
}
export default App;
