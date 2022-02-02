import {useState, useReducer} from "react"
import {nanoid} from "nanoid"


import reducer, {
    ADD_TODO,
    REMOVE_TODO,
    COMPLETE_TODO
  } from "./components/reducer"

const initialState = [
  {
    id: nanoid(),
    text: "First Item",
    completed: false
  }
]

function App() {
  const [text, setText] = useState("")
  const [todo, dispatch] = useReducer(reducer, initialState)

  const addTodoItem = () => {
    dispatch({type: ADD_TODO, id: nanoid(), text: text})
  }

  const removeTodo = (id) =>{
    dispatch({ type: REMOVE_TODO, id })
  }

  const completeTodo = (id) => {
    dispatch({ type: COMPLETE_TODO, id })
  }

  const handleSubmit = (event)=> {
    event.preventDefault()
    addTodoItem()
    setText("")
  }

  const handleChange = (event) => {
    const value = event.target.value
    setText(value)
  }

  return (
    <main>
      <h1>TODO</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholde="what's on your agenda..."
          onChange={handleChange}
          value={text}
        />

        <button disabled={text.length === 0} type="submit">submit</button>
      </form>
      {
        todo.map((todo)=>(
          <div key={todo.id} className="todoItem">
            <p>{todo.text}</p>
            <button onClick={()=> removeTodo(todo.id)}>Remove</button>
            <button onClick={()=> completeTodo(todo.id)}>Done</button>
          </div>
        ))
      }
      TO DO App frontend Mentor
    </main>
  );
}

export default App;
