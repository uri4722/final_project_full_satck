import { useContext, useEffect, useState } from "react"
import HeaderNav from "../component/Hader"
import usePermission from "../function/usePermission"
import { UserContext } from "../component/MyWeb"
import fetchData from "../function/fetchData"
import DisplayAlbums from "../component/DisplayAlbums"
import "./css/Albums.css"


function Albums() {
    usePermission()
    const [albums, setAlbums] = useState()

    const { id } = useContext(UserContext)

    const URL = `  https://jsonplaceholder.typicode.com/albums?userId=${id}`
    useEffect(() => {
        id && fetchData(setAlbums, URL)
    }, [URL, id])


    return <div className="AlbumsDiv">
        <HeaderNav />
        {albums && albums.map((album) => {
            return <DisplayAlbums key={album.id} id={album.id} title={album.title} />
        })}

    </div>
}

export default Albums