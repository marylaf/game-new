import back from "../images/icon-back.svg";
import star from "../images/icon-star.svg";
import coins from "../images/coins.svg";
import '../index.css';

function Header() {
  return (
    <header className="header" >
     <button className="button"><img src={back} className="icon" alt="button back" /></button>
      <div className="header__container">
         <img src={star} alt="star" className="header__icon" />
         <p className="header__number">500/9000</p>
      </div>
      <div className="header__container">
      <img src={coins} alt="coins" className="header__icon header__icon_type_second" />
         <p className="header__number header__number_type_second">9553215</p>
      </div>
    </header>
  );
}

export default Header;
