import { useEffect, useState } from "react";
import toggleDisplay from "../function/toggleDisplay";
import fetchDataGet from "../function/fetchData";

export default function DisplayPosts(props) {
    const [displayPost, setDisplayPost] = useState(false)
    const [displayComments, setDisplayComments] = useState(false)

    const { post } = props

    const [comments, setComments] = useState()
    const URL = `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
    useEffect(() => {
        displayComments && fetchDataGet(setComments, URL)
    }, [displayComments, URL])

    return <div className="postDiv" >
        <h2>
            {post.title}
            <span
                className="toggle"
                onClick={() => toggleDisplay(setDisplayPost)}>
                {!displayPost ? ' ⇩' : " ⇧"}
            </span>
        </h2>
        {displayPost && <p>
            {post.body}
            <span
                className="toggle"
                onClick={() => toggleDisplay(setDisplayComments)}>
                {!displayComments ? ' For comments ⇩' : " Don't show comments ⇧"}
            </span>
        </p>}
        {displayComments && comments && comments.map(comment => {
            return <div className="commentDiv" key={comment.email}>
                <br />
                <h3>{comment.name}</h3>
                <h5>{comment.email}</h5>
                <p>{comment.body}</p>
            </div>

        })}
    </div>

}

