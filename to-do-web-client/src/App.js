import React, { useRef, useState } from 'react';
import Counter from './components/Counter';
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
        { id: 17, title: "JS7", body: { text: "text", style: "" } },
        { id: 18, title: "JS8", body: { text: "text", style: "" } },
        { id: 19, title: "JS9", body: { text: "text", style: "" } },
        { id: 2, title: "JS10", body: { text: "text", style: "" } },
        { id: 3, title: "JS11", body: { text: "text", style: "" } },
        { id: 4, title: "JS12", body: { text: "text", style: "" } }
    ]);

    const [title, setTitle] = useState('');
    const inputBody = useRef();

    const addNewPost = (e) => {
        e.preventDefault();
        //inputBody.current.value
        const newPost = {
            id: Date.now(),
            title,
            body: {
                text: inputBody.current.value,
                style: "red"
            }
        }
        setPosts([...posts,newPost])
    }

    return (
        <div>
            <form>
                <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)} 
                    type="text" 
                    placeholder="Заголовок" 
                />
                <MyInput 
                    type="text" 
                    placeholder="Текст"
                    ref={inputBody} 
                />
                <MyButton onClick={addNewPost}>Создать</MyButton>
            </form>
            <PostList posts={posts} title={'Список постов 1'} />
        </div>
        
    );
}

export default App;
