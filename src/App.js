import React, { useRef } from 'react';
import './App.css';
import { AppsList } from './components/apps-list';
// import { ListAdder } from './components/list-adder';
import { TodoApp } from './components/TodoApp';
import { useState } from 'react';



function App() {
  
  const [lists, setLists] = useState([])
  const listInputAdderRef = useRef()
  const userLoginInputRef = useRef()
  const passwordLoginInputRef = useRef()
  const [user, setUser] = useState([{}])
   
  const addList = () => {
    const appId = Math.random() * 9999999999999
    const newListApp =  <TodoApp mainTitle={listInputAdderRef.current.value} key={appId} />
    listInputAdderRef.current.value = ''
    const newLists = lists.concat(newListApp)
    setLists(newLists)
  }
  
  const loginUser = () => {
    const userName = userLoginInputRef.current.value
    userLoginInputRef.current.value = '' 
    passwordLoginInputRef.current.value = '' 
    user[0] = {userName, role: 'admin'}
    setUser(user[0])
    }

  return (
    <>
      {user.role === 'admin' ? (
      <>
        <input defaultValue='' ref={listInputAdderRef} type="text" placeholder='Whats the list name'/>
        <button onClick={addList}>ADD LIST</button>
        <AppsList items={lists}/>
      </>
    ) : (
      <>
        <input ref={userLoginInputRef} type="text" placeholder={'username'}/>
        <input ref={passwordLoginInputRef} type="password" placeholder={'password'}/>
        <button onClick={loginUser}>Sign in</button>
      </>

    ) }
  </>
  );
}
export default App;
