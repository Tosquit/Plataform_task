import React, { useRef,useState } from "react";

const fakeTodos=[
  {what:"Study",done:false}
];
const TodoItem=({todo, onClick})=> 
  <li className="todo-item" onClick={onClick}>
  <input type="checkbox" checked={todo.done}/>
  <span className={"what" + (todo.done ? " done ": "")}>
    {todo.what}
  </span>
</li>

function TodoList(){
  const inputRef = useRef();
  const [todos,setTodos]= useState(fakeTodos);

  const addTodo = (event)=>{
    event.preventDefault();
    const what = inputRef.current.value;
    if(what) {
      setTodos((oldTodos)=>[...oldTodos,{what, done: false}]);
      inputRef.current.value ="";
    }
  };
  return(
    <div className="todo-list">
      < form onSubmit={addTodo}>
          <input tyoe="text" ref={inputRef}/>
          <button>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo)=>(
          <TodoItem key={`${index}-${todo.what}`} todo={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;