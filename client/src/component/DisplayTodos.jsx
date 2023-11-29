import { useState } from "react"
import toggleDisplay from "../function/toggleDisplay";


function DisplayTodos({ todo, setTodos }) {
    console.log(todo);
    const { title, completed, todo_id } = todo
    const [isCompleted, setIsCompleted] = useState(completed)

    const handelCheck = () => {
        toggleDisplay(setIsCompleted);
        setTodos(prev => {
            return prev.map(to => to.todo_id === todo_id ? { ...to, completed: !completed } : to)
        })
    }

    return <div className="displayTodo" >
        <h4 style={{ textDecoration: isCompleted ? "line-through" : "none" }}>{title}</h4>
        <input
            type="checkbox"
            checked={isCompleted}
            onChange={handelCheck}
        />

    </div >
}
export default DisplayTodos
