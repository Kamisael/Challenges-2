export const initial = {
    counter: 2,
    todos: [
      {
        id: 1,
        done: false,
        text: "Challenge",
      },
      {
        id: 2,
        done: false,
        text: "Todo",
      },
    ],
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "add": {
        const id = state.counter + 1;
        const todo = {
          id: id,
          done: false,
          text: action.text,
        };
        return {
          counter: id,
          todos: [...state.todos, todo],
        };
      }
      case "edit": {
        const todos = state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, text: action.text } : todo
        );
        return {
          counter: state.counter,
          todos: todos,
        };
      }
      case "check": {
        const todos = state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        );
        return {
          counter: state.counter,
          todos: todos,
        };
      }
      case "remove": {
        const todos = state.todos.filter((todo) => todo.id !== action.id);
        return {
          counter: state.counter,
          todos: todos,
        };
      }
      default:
        return state;
    }
  };
  