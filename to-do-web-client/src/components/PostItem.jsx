import React from 'react';
import MyButton from './UI/Buttons/MyButton';
import { useNavigate } from "react-router-dom";

const PostItem = (props) => {
    const router = useNavigate();
    return (
        <div className="post">
            <div className="post_content">
                <strong style={{cursor:'pointer'}} onClick={() => router('/posts/'+props.post.id)}>{props.post.id}. {props.post.title}</strong>
                <div className={props.post.body.style }>
                    {props.post.body.text }
                </div>
            </div>
            <div className="post_btn">
                <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
            </div>
        </div>
    )
}
export default PostItem;