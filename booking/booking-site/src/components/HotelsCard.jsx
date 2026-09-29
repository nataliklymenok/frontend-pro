const HotelsCard = ({ hotel }) => {
  return (
    <article className="hotel-card">
      <div className="hotel-card-info">
        <h3>{hotel.name}</h3>
        <p>
          {hotel.address}, {hotel.city}
          {hotel.state ? `, ${hotel.state}` : ""}
        </p>

        {hotel.phone_number && <p>{hotel.phone_number}</p>}

        {hotel.website && (
          <a href={hotel.website} target="_blank" rel="noreferrer">
            Website
          </a>
        )}
      </div>

      <span className="hotel-card-rating">
        {hotel.hotel_rating ? `★ ${hotel.hotel_rating}` : "No rating"}
      </span>
    </article>
  );
};

export default HotelsCard;
