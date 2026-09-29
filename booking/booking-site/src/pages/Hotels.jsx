import { useSelector } from "react-redux";
import HotelsCard from "../components/HotelsCard";

const Hotels = () => {
  const { items, status, error } = useSelector((state) => state.hotels);

  if (status === "loading") {
    return <p className="status-message">Loading...</p>;
  }

  if (status === "failed") {
    return <p className="status-message error">{error}</p>;
  }

  if (status === "succeeded" && items.length === 0) {
    return <p className="status-message">No hotels found.</p>;
  }

  return (
    <section className="hotels-results container">
      <h2>{items.length} hotels found</h2>

      <div className="hotels-grid">
        {items.map((hotel) => (
          <HotelsCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </section>
  );
};

export default Hotels;
