import { useContext, useEffect, useState } from "react"
import usePermission from "../function/usePermission"
import { UserContext } from "../component/MyWeb"
import fetchDataGet from "../function/fetchData"
import DisplayTodos from "../component/DisplayTodos"
import OrderTodos from "../component/OrderTodos"
import "./css/Todos.css"
import HeaderNav from "../component/Hader"
const BASEURL = 'http://localhost:7500/';


function Todo() {
    usePermission()
    const { user_id } = useContext(UserContext)
    const [todos, setTodos] = useState()
    const [orderBy, setOrderBy] = useState("Oldest")
    const URL = `${BASEURL}todos/userId=${user_id}`
    useEffect(() => {
        user_id && fetchDataGet(setTodos, URL)
    }, [URL, user_id])

    function makeOrder(order) {
        if (!todos) return
        let newOrder = todos.map(obj => ({ ...obj }));
        let compareFunction;
        switch (order) {
            case "Oldest":
                compareFunction = (a, b) => a.date - b.date;
                break;
            case "Newest":
                compareFunction = (a, b) => b.date - a.date;
                break;
            case "A-Z":
                compareFunction = (a, b) => a.title.localeCompare(b.title);
                break;
            case "Random":
                compareFunction = () => Math.random() - 0.5;
                break;
            case "Done":
                compareFunction = (a) => a.completed ? -1 : 1;
                break;
            case "Not done":
                compareFunction = (a) => a.completed ? 1 : -1;
                break;
            default:
                compareFunction = (a, b) => 0;
        }
        newOrder.sort(compareFunction)
        setTodos(prev => {
            if (prev !== newOrder) {
                return newOrder
            }
        })
    }

    useEffect(() => {
        makeOrder(orderBy)
    }, [orderBy])

    return <div className="todosDiv" >
        <div className="headerDiv">
            <HeaderNav />
            <h1>My tasks</h1>
            <OrderTodos orderBy={orderBy} setOrderBy={setOrderBy} className="orderBy" />
        </div>
        {todos && todos.map(todo => {
            return <DisplayTodos
                todo={{ ...todo }}
                key={todo.todo_id}
                setTodos={setTodos}
            />

        })}

    </div>
}

export default Todo