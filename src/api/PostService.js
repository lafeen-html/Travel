import axios from "axios";

export default class PostService {
  static async getCommentsById(id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    return response;
  }
}