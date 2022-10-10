import React, {  } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PostItem from './PostItem';

const PostList = (props) => {
    //<div>{p.id}</div>
    if(!props.posts.length){
        return (
            <h1 style={{textAlign: 'center'} }>
                Постов нет
            </h1>
        )
    }
    return (
        <div className="App">
            <h1 style={{textAlign: 'center'} }>
                { props.title }
            </h1>
            <TransitionGroup>
                {props.posts.map((p, index) => 
                        <CSSTransition
                        key={p.id}
                        timeout={500}
                        classNames="post">
                            <PostItem remove={props.remove} number={index+1} post={p}  />
                        </CSSTransition>
                    
                )}
            </TransitionGroup>
            
        </div>
    )
}
export default PostList;