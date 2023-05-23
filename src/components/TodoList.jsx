import React, { useRef, useState, useEffect } from "react";
import "./liststyle.css";

const fakeTodos = [
  { what: "Mirar cuadro Guernica", done: false },
  { what: "Mirar cuadro La monsa lisa", done: false },
  { what: "Mirar cuadro La Noche estrellada", done: false },
  { what: "Visitar la tienda de recuerdos", done: false },
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

  useEffect(() => {
    // Recuperar los todos del localStorage cuando se carga el componente
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    } else {
      setTodos(fakeTodos);
    }
  }, []);

  useEffect(() => {
    // Guardar los todos en el localStorage cuando cambian
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (event) => {
    event.preventDefault();
    const what = inputRef.current.value;
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
        <input className="addtext" type="text" ref={inputRef} />
        <button className="insert">Inserta tus Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={todo.what}
            todo={todo}
            onClick={() => toggleTodo(index)}
          />
        ))}
      </ul>
      <button className="del" onClick={removeChecked}>
        Eliminar Checked
      </button>
      <button className="del" onClick={removeAll}>
        Eliminar All
      </button>
    </div>
  );
}

export default TodoList;
