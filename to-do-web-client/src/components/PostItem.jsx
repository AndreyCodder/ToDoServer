import React from 'react';

const PostItem = (props) => {

    return (
        <div className="post">
            <div className="post_content">
                <strong>{props.post.title}</strong>
                <div className={props.post.body.style }>
                    {props.post.body.text }
                </div>
            </div>
            <div className="post_btn">
                <button>Удалить</button>
            </div>
        </div>
    )
}
export default PostItem;