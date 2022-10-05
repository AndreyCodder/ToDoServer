import React, { useRef, useState } from 'react';
import MyButton from './UI/Buttons/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = (props) => {

    const [post, setPost] = useState({title: '', body: { text: "" }});

    const addNewPost = (e) => {
        e.preventDefault();
        //inputBody.current.value
        const newPost = {
            ...post, id: Date.now()
        }
        props.create(newPost);
        setPost({title: '', body: { text: "" }})
    }

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
                type="text"
                placeholder="Заголовок"
            />
            <MyInput
                value={post.body.text}
                onChange={e => setPost({ ...post, body: { text: e.target.value, style: "red" } })}
                type="text"
                placeholder="Текст"
            />
            <MyButton onClick={addNewPost}>Создать</MyButton>
        </form>
    );
};

export default PostForm;