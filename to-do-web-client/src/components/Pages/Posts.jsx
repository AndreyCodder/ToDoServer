import React, { useEffect, useState } from 'react';
import { usePosts } from '../hooks/usePost';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import MyButton from '../UI/Buttons/MyButton';
import MyModal from '../UI/MyModal/MyModal';
import PostForm from '../PostForm';
import PostFilter from '../PostFilter';
import Loader from '../UI/Loader/Loader';
import PostList from '../PostList';
import Pagination from '../UI/Pagination/Pagination';
import '../../styles/App.css';
import { PageCount } from '../../utils/pageCount';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '' , filter: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.filter);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    
    const [fetchingPosts, isLoading, error] = useFetching( async () => {
        const postss = await PostService.GetAll(limit, page);
        const parsedPosts = postss.data.map((p, index) =>  { return {...p, body: { text: p.body }} })
        setPosts(parsedPosts);
        const totalCount = postss.headers['x-total-count'];
        setTotalPages(PageCount(totalCount, limit))
    } )
    

    
    useEffect( () => {
        fetchingPosts();
    }, [page])

    
    

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div style={{width: "50vw"}}>
            <MyButton style={{margin: "15px 0"}} onClick={() => setModal(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {error &&
                <h1>Ошибка: {error}</h1>
            }
            {isLoading
                ? <Loader />
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов 1'} />
            }
            <Pagination page={page} setPage={setPage} totalPages={totalPages}/>
        </div>
        
    );
}

export default Posts;
