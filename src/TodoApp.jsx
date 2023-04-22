import React from "react";
import TodoItem from "./TodoItem.jsx";
import AddTodo from "./AddTodo.jsx";
import { useTodo } from "./todo.js";
import './App.css'

const TodoApp = () => {
  const [state, count, pending, dispatch] = useTodo();

  const handleCheck = (id) => {
    dispatch({ type: "check", id: id });
  }

  return (<>
  <h1>Cantidad: {count}</h1>
  <h1>Pendientes: {pending}</h1>
    <AddTodo
      add={text => dispatch({type: "add", text: text})}
    />
    {state.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        check={handleCheck}
        remove={() => dispatch({type: "remove", id: todo.id})}
        edit={text => dispatch({type: "edit", id: todo.id, text: text})}
      />
    ))}
  </>);
}

export default TodoApp;
