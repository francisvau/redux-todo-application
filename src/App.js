
import TodoList from "./features/todolist/TodoList";
import AddTodo from "./features/todolist/AddTodo";

function App() {
  return (
    <div className="App">
      <h1>redux-todo-application</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
