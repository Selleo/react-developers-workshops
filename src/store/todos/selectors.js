export const getTodos = state => ({
  ...state.todos.list,
  data: state.todos.list.ids.map(id => state.todos.byId[id]),
});
