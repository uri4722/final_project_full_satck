import { useEffect, useState } from "react"
import fetchData from "../function/fetchData"
import './css/Login.css';
import { useNavigate } from "react-router-dom";
import DisplayForm from "../component/DisplayForm";

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
        fetchData(setUserLogin, `https://jsonplaceholder.typicode.com/users?username=${logInputs.name}`)
    }

    useEffect(() => {
        if (userLogin === null) { return }
        if (userLogin[0]) {
            console.log(userLogin[0]);
            const lengthLat = userLogin[0].address.geo.lat.length
            const password = userLogin[0].address.geo.lat.slice(lengthLat - 4);
            const passwordInput = logInputs.password
            if (password === passwordInput) {
                logInputs.rememberMe ?
                    localStorage.setItem("user", JSON.stringify(userLogin[0])) :
                    sessionStorage.setItem("user", JSON.stringify(userLogin[0]));
                props.setUser(userLogin[0])
                setMessage({ body: "Welcome " + userLogin[0].name, type: "Succeeded" })
                setTimeout(() => {
                    Navigate("/");
                }, 1600)

            } else setMessage({ body: "Worng password please try again", type: "failed" })
        }
        else setMessage({ body: "Worng name please try again", type: "failed" })

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

// שמות של משתמש שקיימים
    //   ?username=Bret
    // username: 'Elwyn.Skiles' pass:8918
    // username: 'Maxime_Nienow' pass:3990
    // username: 'Delphine' pass:6463
    //  username: 'Moriah.Stanton',