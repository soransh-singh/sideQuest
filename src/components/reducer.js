export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO"
export const COMPLETE_TODO = "COMPLETE_TODO"

const reducer = (state, action) => {
  switch(action.type){
    case ADD_TODO:
      const newTodo = {
        id: action.id,
        text: action.text,
        completed: false
      }
      return [...state, newTodo]

    case REMOVE_TODO:
      return state.filter((todo)=> todo.id !== action.id);

    case COMPLETE_TODO:
      const completeTodo = state.map((todo)=>{
        if (todo.id === action.id){
          return {
            ...todo,
            completed: !todo.completed}
        }else{
          return todo
        }
      })
      return completeTodo

    default:
      return state;
  }
}

export default reducer;
