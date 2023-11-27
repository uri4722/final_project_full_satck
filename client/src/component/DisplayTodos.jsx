import { useState } from "react"
import toggleDisplay from "../function/toggleDisplay";


function DisplayTodos(props) {
    const { todo } = props
    console.log(todo);
    const { title, completed } = todo
    const [isCompleted, setIsCompleted] = useState(completed)

    return <div className="displayTodo" >
        <h4 style={{ textDecoration: isCompleted ? "line-through" : "none" }}>{title}</h4>
        <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => toggleDisplay(setIsCompleted)}
        />

    </div >
}
export default DisplayTodos
