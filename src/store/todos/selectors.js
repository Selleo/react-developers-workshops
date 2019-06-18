export const getTodos = state =>
  state.todos.list.map(id => state.todos.byId[id]);
