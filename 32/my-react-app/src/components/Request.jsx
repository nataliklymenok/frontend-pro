import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSwapiData } from "../store/swapiSlice";

const Request = () => {
  const [category, setCategory] = useState("films");
  const dispatch = useDispatch();
  const status = useSelector((state) => state.swapi.status);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category.trim()) return;
    dispatch(fetchSwapiData(category.trim()));
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="base-url">https://swapi.online/api/</div>

      <input
        type="text"
        placeholder="films"
        className="search-input"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <button type="submit" className="get-btn" disabled={status === "loading"}>
        {status === "loading" ? "Loading..." : "Get info"}
      </button>
    </form>
  );
};

export default Request;
