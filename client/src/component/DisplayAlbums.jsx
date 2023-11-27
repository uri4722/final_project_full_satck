import { useEffect, useState } from "react"
import toggleDisplay from "../function/toggleDisplay"
import fetchDataGet from "../function/fetchData"
import albumsImg from "../imgs/albumsImg.jpg"
import DisplayPhotos from "./DisplayPhotos"

function DisplayAlbums(props) {
    const { id, title } = props
    const [displayPhotos, setDisplayPhotos] = useState(false)
    const [photos, setPhotos] = useState()

    const URL = `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
    useEffect(() => {
        displayPhotos && fetchDataGet(setPhotos, URL)
    }, [displayPhotos, URL])

    return <div className="albumDiv">
        <h3 >{title}</h3>
        <img
            src={albumsImg}
            alt="link for album"
            onClick={() => toggleDisplay(setDisplayPhotos)} />
        <div className="photos">
            {displayPhotos && photos &&
                photos.map(photo => <DisplayPhotos Url={photo.thumbnailUrl} title={photo.title}
                    key={Math.random()} />)}
        </div>
    </div>

}
export default DisplayAlbums