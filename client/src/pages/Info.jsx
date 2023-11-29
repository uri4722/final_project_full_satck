import usePermission from "../function/usePermission"
import DisplayInfo from "../component/DisplayInfo"
import "./css/Info.css"
import HeaderNav from "../component/Hader"


function Info() {
    usePermission()

    return <div className="InfoDiv">
        <HeaderNav />
        <DisplayInfo />
    </div>
}

export default Info