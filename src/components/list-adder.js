import { useRef } from "react";
// import { ListContext } from "../providers/list-context";
// import { useListAdder } from "../hooks/use-list-adder";
// import { ListAdderContext } from "../providers/list-adder-context";

import { TodoApp } from "./TodoApp";


export function ListAdder() {
    
    const listAdderInputRef = useRef()

    const addList = (listTitle) => {
        const newListApp =  TodoApp({listTitle})
        const newLists = [].concat(newListApp)
        console.log(newLists)
        // setLists(newLists)
    }

    return (
        <>
            <input ref={listAdderInputRef} type="text" />
            <button onClick={() => addList(listAdderInputRef.current.value)}>ADD LIST</button>
        </>
    )
}