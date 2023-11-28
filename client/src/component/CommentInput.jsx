import React, { useContext, useState } from 'react';
import './css/CommentInput.css';
import { fetchDataPost } from '../function/fetchData';
import toggleDisplay from '../function/toggleDisplay';
const BASEURL = 'http://localhost:7500/';

export default function CommentInput({ user_name, email, post_id, setDisplayResInput, setComments }) {
    const [commentInput, setCommentInput] = useState("");

    const pushComments = (data) => {
        data.comments_id = data.id;
        
        setComments(prev => {
            const newComments = [...prev, data];
            return newComments;
        })
    }
    const handleChange = ({ target }) => {
        const { value } = target
        setCommentInput(value)
    }
    const handleSubmit = async (e) => {
        const body = { user_name: user_name, email: email, post_id: post_id, body: commentInput }
        e.preventDefault();
        fetchDataPost(pushComments, `${BASEURL}comments/postId=${post_id}`, body)
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