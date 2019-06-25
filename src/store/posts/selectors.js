export const getPosts = state => ({
  ...state.posts.list,
  data: state.posts.list.ids.map(id => state.posts.byId[id]),
});
