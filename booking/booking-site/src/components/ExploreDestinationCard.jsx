import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchHotels } from "../store/hotelsSlice";

const ExploreDestinationCard = ({ city }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(fetchHotels({ city: city.name }));
    navigate("/hotels");
  };

  return (
    <article className="destination-card" onClick={handleClick}>
      <img src={city.img} alt={city.name} />

      <div className="destination-info">
        <div>
          <h3>{city.name}</h3>
          <p>{city.country}</p>
        </div>

        <span>{city.raiting}</span>
      </div>
    </article>
  );
};

export default ExploreDestinationCard;
