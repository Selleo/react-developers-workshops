import axios from 'axios';
import qs from 'query-string';

export const api = axios.create({
  baseURL: 'https://react-developers-workshops-server-einjjcgrqx.now.sh',
});

export const fetchPosts = ({ limit, search }) =>
  api.get(`/posts?${qs.stringify({ _limit: limit, title_like: search })}`);
