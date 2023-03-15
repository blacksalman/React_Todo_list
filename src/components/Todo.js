function Todo({todo, toogleTodos}){
    function handleTodoClick(){
        toogleTodos(todo.id)
    }
    return(
        <>
        <label>
            <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
          {todo.name}
        </label>
        </>
    )
}
export default Todo;