// import logo from './logo.svg';
import React,{useState, useRef, useEffect} from 'react';
import './App.css';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

// import Clock from './components/clock.js';
// import LoginControl from "./components/LoginControl"
// import Blog from "./components/Blog"
// import Form from './components/Form';
import Search from './components/Search';
import List from './components/List';
import TodoList from './components/TodoList';


const LOCAL_STORAGE_KEY = 'todosApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos) setTodos(storedTodos)
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toogleTodos(id){
    const newTodo = [...todos];
    const todo = newTodo.find(todo=>todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodo)

  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if(name == '') return
    setTodos(prevTodo=>{
      return [...prevTodo, {id: uuidv4(), name:name, complete:false}]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos(){
    const newTodos = todos.filter(todo=>!todo.complete);
    setTodos(newTodos)
  }
  
  // const [flag, setFlag] = useState(true);

  // const toggle = ()=>{
  //   console.log(`Toggle clicked`);
  //   setFlag(!flag);
  // }
  // const posts = [
  //   {
  //     id:1,
  //     title:"Hello World",
  //     content:"Welcome to React"
  //   },
  //   {
  //     id:2,
  //     title:"Installation",
  //     content:"You can Install React form npm"
  //   },
  //   {
  //     id:3,
  //     title:"Run App",
  //     content:"You can run react app with npm start."
  //   }
  // ]
  return (
    <>
    {/* <button onClick={()=>setFlag(!flag)}>Toggle clicked component</button>
    {flag ? <Clock /> : "No clock component"} */}
    {/* <LoginControl /> */}
    {/* <Blog posts={posts}/> */}
    {/* <Form /> */}
    {/* <Search /> */}
    {/* <List /> */}
    <TodoList todos={todos}toogleTodos={toogleTodos} />
    <input ref={todoNameRef} type="text" />
    <button onClick={handleAddTodo}>Add Todo</button>
    <button onClick={handleClearTodos}>Clear completed Todos</button>
    <div>{todos.filter(todo=>!todo.complete).length} left to do</div>
    </>
  );
}

export default App;
