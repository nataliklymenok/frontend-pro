import gelatoLogo from "../assets/gelato_candle.jpg";
import oopsLoopsLogo from "../assets/oops_loops.jpg";
import gelatoPhoto1 from "../assets/gelato-photo-1.JPG";
import gelatoPhoto2 from "../assets/gelato-photo-2.JPG";
import gelatoPhoto3 from "../assets/gelato-photo-3.png";
import oopsPhoto1 from "../assets/oops-photo-1.png";
import oopsPhoto2 from "../assets/oops-photo-2.png";
import oopsPhoto3 from "../assets/oops-photo-3.png";

const About = () => {
  return (
    <section className="page">
      <h2>About</h2>

      <h3>Gelato Candle</h3>
      <a>
        <img src={gelatoLogo} alt="Gelato Candle" className="brand-logo" />
      </a>
      <p>
        Бренд декоративних свічок ручної роботи з натурального воску, натхненних
        їжею, формами та маленькими приємностями.
      </p>
      <div className="gallery">
        <img src={gelatoPhoto1} alt="Gelato Candle photo 1" />
        <img src={gelatoPhoto2} alt="Gelato Candle photo 2" />
        <img src={gelatoPhoto3} alt="Gelato Candle photo 3" />
      </div>

      <h3>Oops Loops Studio</h3>
      <a>
        <img
          src={oopsLoopsLogo}
          alt="Oops Loops Studio"
          className="brand-logo"
        />
      </a>
      <p>
        Бренд унікальних сумок і аксесуарів з апсайкл-деніму, де старі джинси
        отримують нову історію.
      </p>
      <div className="gallery">
        <img src={oopsPhoto1} alt="Oops Loops Studio photo 1" />
        <img src={oopsPhoto2} alt="Oops Loops Studio photo 2" />
        <img src={oopsPhoto3} alt="Oops Loops Studio photo 3" />
      </div>
    </section>
  );
};

export default About;
