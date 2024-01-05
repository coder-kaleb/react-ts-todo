import { useState } from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";
import { Todo } from "./module";
import TodoList from "./components/TodoList";
 
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  const handleAdd = (e:React.FormEvent<EventTarget>) => {
    e.preventDefault()
    if(todo) {
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false} ])
      setTodo("")
    }
    
  }
  return (
    <div className="App">
      <span className="heading">Taskiti </span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
