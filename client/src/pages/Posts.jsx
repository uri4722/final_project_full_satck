import { useContext, useEffect, useState } from "react"
import fetchDataGet from "../function/fetchData"
import usePermission from "../function/usePermission"
import { UserContext } from "../component/MyWeb"
import DisplayPosts from "../component/DisplayPosts"
import "./css/Posts.css"
import HeaderNav from "../component/Hader"
const BASEURL = 'http://localhost:7500/';


function Posts() {
    usePermission()
    const { user_id } = useContext(UserContext)
    console.log(user_id);
    const [posts, setPosts] = useState()
    const URL = `${BASEURL}posts/userId=${user_id}`
    useEffect(() => {
        fetchDataGet(setPosts, URL)
    }, [URL])



    return <div className="postsDiv">
        <HeaderNav />
        <h1>My posts</h1>
        {posts && posts.map((post) => <DisplayPosts post={post} key={post.id} />)}
    </div>
}

export default Posts