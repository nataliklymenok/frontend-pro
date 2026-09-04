import { useSelector } from "react-redux";

const Results = () => {
  const { category, results, count, status, error } = useSelector(
    (state) => state.swapi,
  );

  if (status === "idle") {
    return null;
  }

  if (status === "loading") {
    return <p className="status-message">Loading...</p>;
  }

  if (status === "failed") {
    return <p className="status-message error">{error}</p>;
  }

  return (
    <section className="result">
      <div className="tags">
        <span>{category}</span>
        <span>{count}</span>
      </div>

      <pre>{JSON.stringify(results, null, 2)}</pre>
    </section>
  );
};

export default Results;
