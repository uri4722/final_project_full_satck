import { useEffect, useState } from "react";
import toggleDisplay from "../function/toggleDisplay";
import fetchDataGet from "../function/fetchData";
import DisplayComments from "./DisplayComments";
import CommentInput from "./CommentInput";
const BASEURL = 'http://localhost:7500/';


export default function DisplayPosts(props) {
    const [displayPost, setDisplayPost] = useState(false)
    const [displayComments, setDisplayComments] = useState(false)
    const [displayResInput, setDisplayResInput] = useState(false)


    const { post, user_name, email } = props

    const [comments, setComments] = useState()
    const URL = `${BASEURL}comments/postId=${post.post_id}`
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
        {displayComments &&
            comments && comments.map(comment => {
                return <DisplayComments
                    key={comment.comments_id}
                    comment={comment}
                />



            })}


        {displayPost && <p className="toggle" onClick={() => toggleDisplay(setDisplayResInput)}>to respond</p>}
        {displayResInput &&
            <CommentInput
                post_id={post.post_id}
                user_name={user_name}
                email={email}
                setDisplayResInput={setDisplayResInput}
            />}
    </div>

}

