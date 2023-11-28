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

    const { user_id, user_name, email } = useContext(UserContext)
    const [posts, setPosts] = useState()
    const URL = `${BASEURL}posts/userId=${user_id}`
    useEffect(() => {
        fetchDataGet(setPosts, URL)
    }, [URL])



    return <div className="postsDiv">
        <HeaderNav />
        <h1>My posts</h1>
        {posts && posts.map((post) => <DisplayPosts user_name={user_name} post={post} email={email} key={post.post_id} />)}
    </div>
}

export default Posts