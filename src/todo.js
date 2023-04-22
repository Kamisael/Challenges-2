import { useReducer } from "react";
import { initial, reducer } from "./TodoReducer";

export const useTodo = () => {
  const [state, dispatch] = useReducer(reducer, initial);

  const count = state.todos.length;
  const pending = state.todos.filter(t => !t.done).length;

  return [state, count, pending, dispatch];
};
