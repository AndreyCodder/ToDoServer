import axios from "axios";

export default class PostService {
  static async GetAll(limit = 10, page = 1) {
    const responsePosts = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _limit: 10,
          _page: page,
        },
      }
    );
    //const tempArray = responsePosts.data.map((p, index) =>  { return {...p, body: { text: p.body }} })
    return responsePosts;
  }

  static async GetByID(id) {
    const responsePosts = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + id
    );
    //const tempArray = responsePosts.data.map((p, index) =>  { return {...p, body: { text: p.body }} })
    return responsePosts;
  }

  static async GetCommentsByID(id) {
    const responsePosts = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + id + "/comments"
    );
    //const tempArray = responsePosts.data.map((p, index) =>  { return {...p, body: { text: p.body }} })
    return responsePosts;
  }
}
