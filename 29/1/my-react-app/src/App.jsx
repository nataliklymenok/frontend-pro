import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./store/counter";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-card">
      <span className="counter-value">Value: {count}</span>
      <div className="counter-controls">
        <button
          className="counter-btn"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>

        <button
          className="counter-btn"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default App;
