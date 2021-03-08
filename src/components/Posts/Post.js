import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    const {id, title, body} = props.post;
    const history = useHistory();
    const commentBtn = id => {
        history.push(`post/${id}`)
    }
    return (
        <div>
            <h2>Title: <small>{title}</small> </h2>
            <p>{body}</p>
            <button onClick={() => commentBtn(id)}>Show Comment</button>
        </div>
    );
};

export default Post;