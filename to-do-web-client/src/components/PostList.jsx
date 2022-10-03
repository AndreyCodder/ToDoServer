import React, { useState } from 'react';
import PostItem from './PostItem';

const PostList = (props) => {
    //<div>{p.id}</div>
    return (
        <div className="App">
            
            {props.posts.map((p) => 
                <PostItem post={p} key={p.id}  />
            )}
        </div>
    )
}
export default PostList;