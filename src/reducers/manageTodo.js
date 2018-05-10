export default function manageTodo(state = {
  todos: [],
}, action) {
  switch(action.type){
    case 'ADD_TODO':
      if (action.todo){
        return {...state, todos: [...state.todos, action.todo]}
      }
      break;
    default:
      break;
  }
  return state;
}
