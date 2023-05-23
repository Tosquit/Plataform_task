import React, { useRef, useState } from "react";
import "./TodoList.css";

const fakeTodos = [
  { what: "Study Rust", done: false },
  { what: "Grade some tasks", done: false },
  { what: "Buy a Tesla", done: true },
];

const TodoItem = ({ todo, onClick }) => (
  <li className="todo-item" onClick={onClick}>
    <input type="checkbox" checked={todo.done} readOnly />
    <div className={"what" + (todo.done ? " done" : "")}>{todo.what}</div>
  </li>
);

function TodoList() {
  const inputRef = useRef();
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault(); // Prevent the brower from reloading because of the form
    const what = inputRef.current.value;
    // 1. We have to create a **new** array
    // 2. We have to pass a function to setTodos because we need to use the oldTodos,
    //    and only React can give us the most recent version.
    if (what) {
      setTodos((oldTodos) => [...oldTodos, { what, done: false }]);
      inputRef.current.value = "";
    }
  };

  const toggleTodo = (index) => {
    setTodos((oldTodos) =>
      oldTodos.map((todo, i) => {
        if (index === i) return { ...todo, done: !todo.done };
        return todo;
      })
    );
  };

  const removeChecked = () =>
    setTodos((oldTodos) => oldTodos.filter((todo) => !todo.done));

  const removeAll = () => setTodos([]);

  return (
    <div className="todo-list">
      <form onSubmit={addTodo}>
        <input type="text" ref={inputRef} />
        <button>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          // The key has to be a unique identifier for the todo item...
          <TodoItem
            key={todo.what}
            todo={todo}
            onClick={() => toggleTodo(index)}
          />
        ))}
      </ul>
      <button onClick={removeChecked}>Remove Checked</button>
      <button onClick={removeAll}>Remove All</button>
    </div>
  );
}

export default TodoList;
