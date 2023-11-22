function OrderTodos(props) {
    const { orderBy, setOrderBy } = props
    return <div className="orderBy">
        <h3> Order By {orderBy} tasks</h3>
        <select
            name="orderBy"
            onChange={select => setOrderBy(select.target.value)}>
            <option >Oldest</option>
            <option >Newest</option>
            <option >A-Z</option>
            <option >Random</option>
            <option >Done</option>
            <option >Not done</option>
        </select>
    </div>
}
export default OrderTodos