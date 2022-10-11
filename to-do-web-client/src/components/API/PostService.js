import axios from 'axios';

export default class PostService {
    static async GetAll(){
        const responsePosts = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const tempArray = responsePosts.data.map((p, index) =>  { return {...p, body: { text: p.body }} })
        return tempArray
    }
}