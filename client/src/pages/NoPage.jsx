import usePermission from "../function/usePermission"

function NoPage() {
    usePermission()
    return <h1>
        404 not page
    </h1>
}
export default NoPage