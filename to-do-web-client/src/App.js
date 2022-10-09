import React, { useMemo, useRef, useState } from 'react';
import Counter from './components/Counter';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/Buttons/MyButton';
import MyInput from './components/UI/input/MyInput';
import MyModal from './components/UI/MyModal/MyModal';
import MySelect from './components/UI/select/MySelect';
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

    const sortedPosts = useMemo( () => {
        console.log("YEAH")
        switch(filter.sort) {
            case "title":
                return ([...posts].sort(function(a, b){
                    let x = a.title.toLowerCase();
                    let y = b.title.toLowerCase();
                    if (x < y) {return -1;}
                    if (x > y) {return 1;}
                    return 0;
                }))
            case "body":
                return ([...posts].sort(function(a, b){
                    let x = a.body.text.toLowerCase();
                    let y = b.body.text.toLowerCase();
                    if (x < y) {return -1;}
                    if (x > y) {return 1;}
                    return 0;
                }))
            default:
                return posts;
                
        }
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo( () => {
        let lowerSearcher = filter.filter.toLocaleLowerCase();
        return sortedPosts.filter(e => e.title.toLocaleLowerCase().includes(lowerSearcher) || e.body.text.toLocaleLowerCase().includes(lowerSearcher))
    }, [sortedPosts, filter.filter])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div>
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
