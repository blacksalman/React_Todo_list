import Todo from "./Todo";
function TodoList({ todos ,toogleTodos}){
    return (
          todos.map(todo=>{
            return <Todo key={todo.id} toogleTodos={toogleTodos} todo={todo} />
          })
    )
}
export default TodoList;