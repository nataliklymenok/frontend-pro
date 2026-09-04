import "./App.css";
import { useDispatch } from "react-redux";
import Request from "./components/Request";
import Results from "./components/Results";
import { clearResults } from "./store/swapiSlice";

function App() {
  const dispatch = useDispatch();

  return (
    <main className="container">
      <h1>SWAPI</h1>
      <Request />
      <Results />

      <button className="clear-btn" onClick={() => dispatch(clearResults())}>
        Clear
      </button>
    </main>
  );
}

export default App;
