import React, { useContext, useState } from 'react';
import './css/CommentInput.css';
import { fetchDataPost } from '../function/fetchData';
import toggleDisplay from '../function/toggleDisplay';
const BASEURL = 'http://localhost:7500/';

export default function CommentInput({ user_name, email, post_id, setDisplayResInput }, props) {
    const [commentInput, setCommentInput] = useState("");
    // const [errorMessage, setErrorMessage] = useState();
    // const setComments = (data) => {
    //     //  עוד לא מעודכן בחוץ כן משנה את הSQL 
    //     // props.setComments(prev => {
    //     //     return { ...prev, data }
    //     // })
    // }
    const handleChange = ({ target }) => {
        const { value } = target
        setCommentInput(value)
    }
    const handleSubmit = async (e) => {
        const body = { user_name: user_name, email: email, post_id: post_id, body: commentInput }
        e.preventDefault();
        // fetchDataPost(setComments, `${BASEURL}comments/postId=${props.post_id}`, body, setErrorMessage)
        setCommentInput("");
        toggleDisplay(setDisplayResInput)
    }

    return (<div className="comment-input-container">
        <textarea
            placeholder=" Enter a response..."
            value={commentInput}
            onChange={handleChange}
        />
        <button onClick={handleSubmit}>Send a comment</button>
    </div>);
}