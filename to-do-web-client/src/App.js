import axios from 'axios';
import React, { useMemo, useRef, useState } from 'react';
import { usePosts } from './components/hooks/usePost';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/Buttons/MyButton';
import MyModal from './components/UI/MyModal/MyModal';
import './styles/App.css';

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: "JS", body: { text: "text", style: "" } },
        { id: 12, title: "JS9", body: { text: "text6", style: "" } },
        { id: 13, title: "JS3", body: { text: "text89", style: "" } },
        { id: 14, title: "JS8", body: { text: "text8", style: "" } },
        { id: 15, title: "JS5", body: { text: "text3", style: "" } },
        { id: 16, title: "JS6", body: { text: "text5", style: "" } },
        { id: 17, title: "JS7", body: { text: "text2", style: "" } }
    ]);

    const [filter, setFilter] = useState({sort: '' , filter: ''})
    const [modal, setModal] = useState(false)
    
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.filter);
    
    async function getPosts() {
        const responsePosts = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(responsePosts.data.map((p, index) =>  { return {...p, body: { text: p.body }} }    ))
    }

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div style={{width: "50vw"}}>
            <button onClick={() => getPosts()}>GET POSTS</button>
            <MyButton style={{margin: "15px 0"}} onClick={() => setModal(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов 1'} />
        </div>
        
    );
}

export default App;
