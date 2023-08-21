import "../index.css";
import circle from "../images/circle.svg";

function Footer() {
  return (
    <footer className="footer">
      <button className="button">
        <p className="footer__button-click">-</p>
        <img src={circle} className="icon" alt="button minus" />
      </button>
      <div className="footer__count">
        <p className="footer__number">50000</p>
      </div>
      <button className="button">
        <p className="footer__button-click">+</p>
        <img src={circle} className="icon" alt="button plus" />
      </button>
      <div className="footer__container">
        <p className="footer__paragraph">WIN</p>
        <p className="footer__win">9553215</p>
      </div>
      <button className="footer__button-auto">
        <p className="footer__button-text">AUTO</p>
      </button>
      <button className="footer__button-auto footer__button-auto_type_spin">
        <p className="footer__button-text footer__button-text_type_spin">
          SPIN
        </p>
      </button>
    </footer>
  );
}

export default Footer;
