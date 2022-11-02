import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PostService from './API/PostService';
import { useFetching } from './hooks/useFetching';
import Loader from './UI/Loader/Loader';

const PostPage = () => {
    const params = useParams();
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);
    const [fetchingPost, isLoading, error] = useFetching( async (id) => {
        const response = await PostService.GetByID(id);
        setPost( () => {
            return {...response.data, body: { text: response.data.body }}
        });
    } )
    const [fetchingComments, isCommentsLoading, commentError] = useFetching( async (id) => {
        const response = await PostService.GetCommentsByID(id);
        setComments( () => { return [...response.data] } );
    } )

    useEffect( () => {
        fetchingPost(params.id);
        fetchingComments(params.id);
    }, [params.id])

    return (
        <div>
            {
                isLoading
                    ? <Loader/>
                    : <div>{post.id}. {post.title}</div>
            }
            <div>
                {
                    isCommentsLoading
                        ? <Loader/>
                        : comments.map( com => { return (
                            <div key={com.body} style={{marginTop: 15}}>
                                <h5>{com.email}</h5>
                                {com.body}
                            </div>
                          )
                        })
                }
            </div>
        </div>
    );
};

export default PostPage;