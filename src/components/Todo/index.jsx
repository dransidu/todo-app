import React, { useState } from "react";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    setTodos((oldTodos) => [...oldTodos, { name: todo, isComplete: false }]);
    setTodo("");
    document.getElementById("todoInput").value = "";
  };

  const removeTodo = (todoIndex) => {
    setTodos(todos.filter((todo, index) => index != todoIndex));
  };

  const doneTodo = (todoIndex) => {
    const newTodoArray = [...todos];
    newTodoArray[todoIndex].isComplete = true;
    setTodos(newTodoArray);
  };

  const redoTodo = (todoIndex) => {
    const newTodoArray = [...todos];
    newTodoArray[todoIndex].isComplete = false;
    setTodos(newTodoArray);
  };

  return (
    <div className="container mt-5" style={{ width: 500 }}>
      <div className="d-flex justify-content-between">
        <input
          id="todoInput"
          onKeyUp={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="Add todo..."
          className="form-control"
        />
        <button onClick={addTodo} className="btn btn-primary fw-bold">
          Add
        </button>
      </div>
      <div className="card mt-2">
        <ul className="list-group list-group-flush">
          {todos.map((todo, index) => {
            return (
              <TodoItem
                index={index}
                name={todo.name}
                isComplete={todo.isComplete}
                removeTodo={(value) => removeTodo(value)}
                doneTodo={(value) => doneTodo(value)}
                redoTodo={(value) => redoTodo(value)}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
