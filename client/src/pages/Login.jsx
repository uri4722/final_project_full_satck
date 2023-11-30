import Cookies from 'js-cookie'
import { useEffect, useState } from "react"
import { fetchDataPost } from "../function/fetchData"
import './css/Login.css';
import { useNavigate } from "react-router-dom";
import DisplayForm from "../component/DisplayForm";
const BASEURL = 'http://localhost:7500/';

function Login(props) {
    const [userLogin, setUserLogin] = useState(null)
    const [message, setMessage] = useState({ body: "", type: "" })
    const Navigate = useNavigate()

    const [logInputs, setLogInputs] = useState({ name: "", password: "", rememberMe: false })
    const handleChange = ({ target }) => {
        const { name, value, type, checked } = target
        const newValue = type === 'checkbox' ? checked : value;
        setLogInputs(prev => {
            return { ...prev, [name]: newValue }
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        fetchDataPost(setUserLogin, `${BASEURL}login`, { ...logInputs }, setMessage)
    }

    useEffect(() => {
        if (userLogin === null) { return }

        if (userLogin) {
            console.log(userLogin);

            // Cookies.set("name", logInputs.name, { expires: logInputs.rememberMe ? 7 : 'null' });
            // Cookies.set("password", logInputs.password, { expires: logInputs.rememberMe ? 7 : 'null', secure: true });
            Cookies.set("name", logInputs.name, { expires: 7 });
            Cookies.set("password", logInputs.password, { expires: 7 });

            logInputs.rememberMe ?
                localStorage.setItem("user", JSON.stringify(userLogin)) :
                sessionStorage.setItem("user", JSON.stringify(userLogin));
            props.setUser(userLogin)
            setMessage({ body: "Welcome " + userLogin.user_name, type: "Succeeded" })
            setTimeout(() => {
                Navigate("/");
            }, 1600)
        }
        setLogInputs({ name: "", password: "", rememberMe: false })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userLogin])

    return <DisplayForm
        logInputs={logInputs}
        message={message}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
    />
}

export default Login

// שמות של משתמשים שקיימים
// ('John Doe', 'john@example.com', '555-1234', 'password123', 'john_doe'),
// ('Jane Smith', 'jane@example.com', '555-5678', 'pass456', 'jane_smith'),
// ('Bob Johnson', 'bob@example.com', NULL, 'bobpass', 'bob_johnson');
// username: 'uri1' pass:1234
