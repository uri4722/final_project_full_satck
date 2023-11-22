import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../component/MyWeb";

function usePermission() {
    const user = useContext(UserContext)
    const navigate = useNavigate();


    useEffect(() => {
        !user && navigate("/Login")
    }, [user, navigate])
}
export default usePermission