
const fakeTodos=[
  {what:"Study",done:false}
];
const TodoItem=({todo})=> <li className='todo-item'>
  <input type="checkbox" checked={todo.done}/>
  <span className={"what" + (todo.done ? " done ": "")}>
  {todo.what}
  </span>
</li>

function TodoList(){
  const [todos,setTodos]= useState(fakeTodos);

  const addTodo = (event)=>{
    event.preventDefault();
  }
  return(
    <div className="todo-list">
      < form onSubmit={addTodo}>
          <input tyoe="text"/>
          <button>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo)=>(
          <TodoItem todo={todo}/>
        ))}
      </ul>
    </div>
  )
}

export default TodoList;