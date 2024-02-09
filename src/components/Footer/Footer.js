import "./Footer.css";
import { Link } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../Icons/logo-dark.svg";
function Footer() {
  return (
    <footer className="footer">
      <LogoIcon className="header__icon header__icon--logo" />
      <div className="footer__col">
        <a className="footer__btn" href="https://www.pexels.com/api/">
          Photos provided by Pexels API
        </a>
      </div>
      <ul className="footer__credits">
        <li>Kseniia Tikhonova, </li>
        <li>Maria Nordqvist, </li>
        <li>Edward Wallin </li>
      </ul>
      <span className="footer__text">Mood Board 2024</span>
    </footer>
  );
}
export default Footer;
