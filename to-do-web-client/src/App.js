import React, { useEffect, useState } from 'react';
import { usePosts } from './components/hooks/usePost';
import PostService from './components/API/PostService';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/Buttons/MyButton';
import MyModal from './components/UI/MyModal/MyModal';
import './styles/App.css';

function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '' , filter: ''})
    const [modal, setModal] = useState(false)
    const [isPostsLoading, setPostsLoading] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.filter);
    
    
    async function fetchPosts(){
        setPostsLoading(true);
        setTimeout( async () => {
            
            const postss = await PostService.GetAll();
            setPosts(postss);
            setPostsLoading(false);
        }, 1000)
        
    }

    
    useEffect( () => {
        fetchPosts();
    }, [])

    
    

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
            {isPostsLoading
                ?   <h1>sdasdasd</h1>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов 1'} />
            }
            
        </div>
        
    );
}

export default App;
