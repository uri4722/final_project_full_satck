import { useContext, useState } from "react"
import { UserContext } from "./MyWeb"

function DisplayInfo() {
    const user = useContext(UserContext)
    
    const titles = ["User name", 'Email', "Phone", "Full name"];
    const keys = ['user_name', 'email', "phone", "full_name"];

    return <ul>
        <h2>{user.username} informtion</h2>
        {titles.map((title, index) => {
            return <li key={index}>
                <span className="infoTitle">{title}: </span>
                {user[keys[index]]}
            </li>

        })}
    </ul>

}

export default DisplayInfo   