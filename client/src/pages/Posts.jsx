import { useContext, useEffect, useState } from "react"
import fetchData from "../function/fetchData"
import usePermission from "../function/usePermission"
import { UserContext } from "../component/MyWeb"
import DisplayPosts from "../component/DisplayPosts"
import "./css/Posts.css"
import UserNav from "../component/UserNav"
import { NavLink } from "react-router-dom"
import HeaderNav from "../component/Hader"


function Posts() {
    usePermission()
    const { id } = useContext(UserContext)

    const [posts, setPosts] = useState()
    const URL = ` https://jsonplaceholder.typicode.com/posts?userId=${id}`
    useEffect(() => {
        fetchData(setPosts, URL)
    }, [URL])



    return <div className="postsDiv">
        <HeaderNav />
        <h1>My posts</h1>
        {posts && posts.map((post) => <DisplayPosts post={post} key={post.id} />)}
    </div>
}

export default Posts