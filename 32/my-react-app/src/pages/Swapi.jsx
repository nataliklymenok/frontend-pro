import { useDispatch } from "react-redux";
import Request from "../components/Request";
import { clearResults } from "../store/swapiSlice";
import Results from "../components/Results";

const Swapi = () => {
  const dispatch = useDispatch();

  return (
    <section className="page">
      <h1>SWAPI</h1>
      <Request />
      <Results />

      <button className="clear-btn" onClick={() => dispatch(clearResults())}>
        Clear
      </button>
    </section>
  );
};

export default Swapi;
