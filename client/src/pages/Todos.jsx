import { useContext, useEffect, useState } from "react"
import usePermission from "../function/usePermission"
import { UserContext } from "../component/MyWeb"
import fetchDataGet from "../function/fetchData"
import DisplayTodos from "../component/DisplayTodos"
import OrderTodos from "../component/OrderTodos"
import "./css/Todos.css"
import HeaderNav from "../component/Hader"


function Todo() {
    usePermission()
    const { id } = useContext(UserContext)
    const [todos, setTodos] = useState()
    const [orderBy, setOrderBy] = useState("Oldest")
    const URL = ` https://jsonplaceholder.typicode.com/todos?userId=${id}`
    useEffect(() => {
        id && fetchDataGet(setTodos, URL)
    }, [URL, id])

    function makeOrder(order) {
        if (!todos) return
        let newOrder = todos.map(obj => ({ ...obj }));
        let compareFunction;
        switch (order) {
            case "Oldest":
                compareFunction = (a, b) => a.id - b.id;
                break;
            case "Newest":
                compareFunction = (a, b) => b.id - a.id;
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
                key={todo.id}
            />

        })}

    </div>
}

export default Todo