import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../component/MyWeb";
import usePermission from "../function/usePermission";
import "./css/Logout.css"
import Cookies from "js-cookie";

function Logout() {
    usePermission()
    const navigate = useNavigate();
    const user = useContext(UserContext)
    localStorage.clear();
    Cookies.remove('name', 'password');

    setTimeout(() => navigate("/Login"), 3500);


    return <div className="LogoutDiv">
        <h1>Hi {user && user.user_name}</h1>

        <p>
            I noticed that you've disconnected from the website.
            <br />
            If there's anything we can do to improve your experience or if you have any feedback for us,
            please don't hesitate to let us know.
            <br />
            We value your presence on our site and hope to see you back soon.</p>

        <h2>
            Best regards
            [web name]
        </h2>
    </div>

}
export default Logout