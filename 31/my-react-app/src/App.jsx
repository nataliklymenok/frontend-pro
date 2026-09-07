import "./App.css";
import CreateTodo from "./components/CreateTodo";
import TodosList from "./components/TodosList";

function App() {
  return (
    <>
      <main className="todo">
        <h1>TODO</h1>

        <CreateTodo />
        <TodosList />
      </main>
    </>
  );
}

export default App;
