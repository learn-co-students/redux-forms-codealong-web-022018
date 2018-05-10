export default function manageTodo(state = {todos: []}, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {todos: [...state.todos, action.todo]}
      break;
    default:
      return state
  }
}
