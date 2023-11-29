import { useState } from "react"
import toggleDisplay from "../function/toggleDisplay";
import { fetchDataPut } from "../function/fetchData";

const BASEURL = 'http://localhost:7500/';


function DisplayTodos({ todo, setTodos }) {

    const { title, completed, todo_id } = todo
    const [isCompleted, setIsCompleted] = useState(completed)

    const handelCheck = () => {
        const URL = `${BASEURL}todos/todoId=${todo_id}`;
        const body = { completed: completed ? "false" : "true" };

        fetchDataPut(URL, body);

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
