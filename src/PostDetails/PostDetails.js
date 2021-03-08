import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PostDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState([]);
    const {body, userId, title} = post;

    const [comment, setComment] = useState([]);
    const {email} = comment;
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
        .then(res => res.json())
        .then(data => setComment(data))
    }, [])
    return (
        <div>
            <h3>UseId: {userId}</h3>
            <h1>{title}</h1>
            <p>{body}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export default PostDetails;