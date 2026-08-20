import gelatoLogo from "../assets/gelato_candle.jpg";
import oopsLoopsLogo from "../assets/oops_loops.jpg";

const Contacts = () => {
  return (
    <section className="page">
      <h2>Contacts</h2>
      <ul className="social-links">
        <li>
          <a
            href="https://instagram.com/gelato.candle"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gelatoLogo} alt="Gelato Candle" className="brand-logo" />
            Gelato Candle
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/oops.loops.studio"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={oopsLoopsLogo}
              alt="Oops Loops Studio"
              className="brand-logo"
            />
            Oops Loops Studio
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contacts;
