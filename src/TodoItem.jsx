import React, { useState } from "react";
import './App.css';

const TodoItem = ({ todo, check, remove, edit }) => {
  const [mode, setMode] = useState("list");
  const [text, setText] = useState(todo.text);

  const handleCheck = () => {
    check(todo.id);
  };

  return (
    <div className="Todo">
      {mode === "list"
        ? <>
          <span className="TodoText">
            {
              todo.done 
              ? <del>{todo.text}</del>
              : todo.text
            }
          </span>
          <button className="CheckTodo" onClick={handleCheck}>Completar</button>
          <button className="RemoveTodo" onClick={remove}>Eliminar</button>
          <button className="EditTodo" onClick={() => setMode("edit")}>Editar</button>
        </>
        : <>
          <input value={text} onChange={e => setText(e.target.value)} className="EditTodoInput" />
          <button className="EditTodoSave" onClick={() => {edit(text); setMode("list");}}>Guardar</button>
          <button className="EditTodoCancel" onClick={() => setMode("list")}>Cancelar</button>
        </>}
    </div>
  );
}

export default TodoItem;
