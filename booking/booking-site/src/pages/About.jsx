const About = () => {
  return (
    <section className="about-page container">
      <div className="section-header">
        <div>
          <span className="section-label">Who we are</span>
          <h2>About Booking</h2>
        </div>
      </div>

      <p className="about-text">
        Booking helps travelers find the perfect place to stay — from cozy
        apartments to five-star hotels, in every corner of the world. We
        gather real listings and reviews so you can compare options and book
        with confidence in just a few clicks.
      </p>

      <div className="about-stats">
        <div className="about-stat">
          <strong>70+</strong>
          <span>Cities covered</span>
        </div>
        <div className="about-stat">
          <strong>1000+</strong>
          <span>Hotels listed</span>
        </div>
        <div className="about-stat">
          <strong>24/7</strong>
          <span>Customer support</span>
        </div>
      </div>
    </section>
  );
};

export default About;
