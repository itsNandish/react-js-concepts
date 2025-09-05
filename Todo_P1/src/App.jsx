import { useEffect, useState } from "react"
import classes from './styles.module.css';
import TodoItem from './components/todo-item'
import TodoDetail from "./components/todo-details";
import { Skeleton } from "@mui/material";

function App() {

  const [loading, setLoading] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDailog, setOpenDailog] = useState(false);


  async function fetchListOfTodos(){
    try{
      setLoading(true);

      const aspiResponse = await fetch('https://dummyjson.com/todos');
      
      const result = await aspiResponse.json();


      if(result?.todos && result?.todos?.length > 0){
        setTodoList(result?.todos);
        setLoading(false);
        setErrorMsg('');
      }else{
        setTodoList([]);
        setLoading(false);
        setErrorMsg('');
      }

    }catch(e){
      console.log(e);
      setErrorMsg('Some seems Off, Not found Buddy !');
    }
  }

  async function fetchDetailsCurrTodo(getCurrTodoId) {
    console.log(getCurrTodoId);
    try{
    const aspiResponse = await fetch(`https://dummyjson.com/todos/${getCurrTodoId}`);
    const details = await aspiResponse.json();

    if(details){
      setTodoDetails(details);
      setOpenDailog(true);
    }else{
      setTodoDetails(null);
      setOpenDailog(false);
    }


    }catch(e){
      console.log(e);
    }
  }

  useEffect(()=> {
    fetchListOfTodos()
  }, [])

  if(loading){
    return (
      <Skeleton variant="rectangulat" width={650} height={650}/>
    )
  }

  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.headerTitle}>
        Simple Todo App Using Material UI
      </h1>

      <div className={classes.todoListWrapper}>
        {
          todoList && todoList.length > 0 ?
          todoList.map(todoItem=> <TodoItem fetchDetailsCurrTodo = {fetchDetailsCurrTodo} todo = {todoItem}/>) : null
        }
      </div>
      <TodoDetail setOpenDailog={setOpenDailog} openDialog={openDailog}
      todoDetails={todoDetails} setTodoDetails={setTodoDetails} />
    </div>
  )
}

export default App
