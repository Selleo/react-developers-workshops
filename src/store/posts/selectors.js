export const getPost = (state, id) => ({
  loading: state.posts.loadingById[id],
  errors: state.posts.errorsById[id],
  data: state.posts.byId[id] || {},
});

export const getPosts = state => ({
  ...state.posts.list,
  data: state.posts.list.ids.map(id => state.posts.byId[id]),
});
