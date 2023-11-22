import { useContext, useState } from "react"
import { UserContext } from "./MyWeb"
import toggleDisplay from "../function/toggleDisplay"

function DisplayInfo() {
    const user = useContext(UserContext)
    const { address } = user
    const [displayAddress, setDisplayAddress] = useState(false)

    const titles = ["User name", 'Email', "Phone", "Website"];
    const keys = ['username', 'email', "phone", "website"];
    const addressTitles = ['City', "Street", "Zipcode"];
    const addressKeys = ['city', "street", "zipcode"];
    return <ul>
        <h2>{user.username} informtion</h2>
        {titles.map((title, index) => {
            return <li key={index}>
                <span className="infoTitle">{title}: </span>
                {user[keys[index]]}
            </li>

        })}
        <li>
            <button onClick={() => toggleDisplay(setDisplayAddress)}>
                <span className="infoTitle">Address: </span>
                {displayAddress ? "⇧" : "⇩"}
            </button>
            {displayAddress && <ul>
                {addressTitles.map((title, index) => {
                    return <li key={index}>
                        <span className="infoTitle">{title}: </span>
                        {address[addressKeys[index]]}
                    </li>

                })}
            </ul>}
        </li>
    </ul>

}

export default DisplayInfo   