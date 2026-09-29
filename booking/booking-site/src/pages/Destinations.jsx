import ExploreDestinationCard from "../components/ExploreDestinationCard";
import { exploreCities } from "../data/exploreCities";

const Destinations = () => {
  return (
    <section className="destinations container">
      <div className="section-header">
        <div>
          <span className="section-label">Popular places</span>
          <h2>All destinations</h2>
        </div>
      </div>

      <div className="destination-grid">
        {exploreCities.map((city) => (
          <ExploreDestinationCard key={city.name} city={city} />
        ))}
      </div>
    </section>
  );
};

export default Destinations;
