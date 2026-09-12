const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-contacts">
        <li>
          <a href="mailto:nklymenok@gmail.com">nklymenok@gmail.com</a>
        </li>
        <li>+38 (066) 995-98-46</li>
        <li>
          <a
            href="https://ua.linkedin.com/in/nataliia-klymenok"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
      <p className="footer-copy">
        © {new Date().getFullYear()} Klymenok Nataliia
      </p>
    </footer>
  );
};

export default Footer;
