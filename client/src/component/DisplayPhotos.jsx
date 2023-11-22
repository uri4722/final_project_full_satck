function DisplayPhotos(props) {
    const { Url, title } = props
    return <div className="photoDiv">
        <h4>{title}</h4>
        <img src={Url} alt={title} />
    </div>

}
export default DisplayPhotos