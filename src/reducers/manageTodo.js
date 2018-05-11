// todos = [
//     { text: 'buy groceries' },
//     { text: 'watch netflix' },
//   ]
function manageTodo(state = {todos: []}, action) {
  // return state;
  switch(action.type){
    case 'ADD_TODO':
      return {todos: state.todos.concat(action.todo.text)}
    default:
      return state;
  }//switch

}

export default manageTodo
