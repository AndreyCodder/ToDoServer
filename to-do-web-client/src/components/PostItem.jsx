import React from 'react';
import MyButton from './UI/Buttons/MyButton';

const PostItem = (props) => {

    return (
        <div className="post">
            <div className="post_content">
                <strong>{props.post.id}. {props.post.title}</strong>
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