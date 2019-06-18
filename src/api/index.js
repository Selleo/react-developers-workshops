import axios from 'axios';
import qs from 'query-string';

export const api = axios.create({
  baseURL: 'https://react-developers-workshops-server-einjjcgrqx.now.sh',
});

const extractData = ({ data }) => data;

export const fetchPost = ({ id }) => api.get(`/posts/${id}`).then(extractData);

export const fetchPosts = ({ limit, search }) =>
  api
    .get(
      `/posts?${qs.stringify({
        _sort: 'id',
        _order: 'desc',
        _limit: limit,
        title_like: search,
      })}`,
    )
    .then(extractData);

export const createPost = post => api.post('/posts', post).then(extractData);

export const updatePost = post =>
  api.put(`/posts/${post.id}`, post).then(extractData);

export const fetchTodos = () => api.get('/todos').then(extractData);
