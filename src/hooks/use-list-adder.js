import { useState } from "react"
import { TodoApp } from "../components/TodoApp"


export function useListAdder() {

    const [lists, setLists] = useState([])

    const addList = (listTitle) => {
        const newListApp =  TodoApp({listTitle})
        const newLists = lists.concat(newListApp)
        setLists(newLists)
    }
    return {addList}
}