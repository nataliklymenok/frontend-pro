import { Link } from "react-router-dom";
import ExploreDestinationCard from "../components/ExploreDestinationCard";
import SearchForm from "../components/SearchForm";
import { exploreCities } from "../data/exploreCities";

const Home = () => {
  return (
    <>
      <SearchForm />

      <section className="destinations" id="destinations">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">Popular places</span>
              <h2>Explore destinations</h2>
            </div>

            <Link to="/destinations" className="view-all">
              View all →
            </Link>
          </div>

          <div className="destination-grid">
            {exploreCities.map((city) => (
              <ExploreDestinationCard key={city.name} city={city} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
