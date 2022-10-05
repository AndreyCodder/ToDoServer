import React, { useRef, useState } from 'react';
import Counter from './components/Counter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/Buttons/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css';

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: "JS", body: { text: "text", style: "" } },
        { id: 12, title: "JS2", body: { text: "text", style: "" } },
        { id: 13, title: "JS3", body: { text: "text", style: "" } },
        { id: 14, title: "JS4", body: { text: "text", style: "" } },
        { id: 15, title: "JS5", body: { text: "text", style: "" } },
        { id: 16, title: "JS6", body: { text: "text", style: "" } },
        { id: 17, title: "JS7", body: { text: "text", style: "" } }
    ]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div>
            <PostForm create={createPost} />
            {posts.length !== 0
                ? 
                <PostList remove={removePost} posts={posts} title={'Список постов 1'} />
                : 
                <h1 style={{textAlign: 'center'} }>
                    Постов нет
                </h1>
            }
        </div>
        
    );
}

export default App;
