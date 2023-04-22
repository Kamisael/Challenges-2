import React, { useState } from "react";
import "./App.css";

const AddTodo = ({ add }) => {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    add(text);
    setText("");
  };

  return (
    <div className="AddTodo">
      <input
        className="AddTodoInput"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button className="AddTodoButton" onClick={handleSubmit}>
        Agregar
      </button>
    </div>
  );
};

export default AddTodo;
