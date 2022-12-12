import { useContext, useRef } from "react";
// import { ListContext } from "../providers/list-context";
// import { useListAdder } from "../hooks/use-list-adder";
// import { ListAdderContext } from "../providers/list-adder-context";
import { useState } from "react";
import { TodoApp } from "./TodoApp";


export function ListAdder() {
    
    // const listAdderApi = useListAdder()

    // const {addList} = useContext(ListAdderContext)
    const listAdderInputRef = useRef()


    // const [lists, setLists] = useState([])

    const addList = (listTitle) => {
        const newListApp =  TodoApp({listTitle})
        const newLists = [].concat(newListApp)
        console.log(newLists)
        // setLists(newLists)
    }

    function handleClick() {
        console.log(listAdderInputRef.current.value)
        addList(listAdderInputRef.current.value)
    }

    return (
        <>
            {/* <ListAdderContext.Provider value={listAdderApi}> */}
                <input ref={listAdderInputRef} type="text" />
                <button onClick={handleClick}>ADD LIST</button>
            {/* </ListAdderContext.Provider> */}
        </>
    )
}