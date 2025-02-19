import { useState } from "react"
import "./App.css"
import List from "todo_components/List"
import Input from "todo_components/Input"
import Main from "todo_components/Main"

function App() {
    const [newTodo, setNewTodo] = useState("")
    const [todos, setTodos] = useState<string[]>(["Hello"])
    const onSubmit = () => {
        setTodos((prev) => [...prev, newTodo])
        setNewTodo("")
    }

    return (
        <>
            <Input value={newTodo} onChange={setNewTodo} onSubmit={onSubmit} />
            <List item={todos} />
            <Main />
        </>
    )
}

export default App
