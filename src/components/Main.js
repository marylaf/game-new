import grape from "../images/grape.svg";
import numbers from "../images/numbers.svg";
import bells from "../images/bells.svg";
import lemon from "../images/lemon.svg";
import bar from "../images/bar.png";
import berries from "../images/berries.svg";
import watermelon from "../images/watermelon.svg";
import plum from "../images/plum.svg";
import orange from "../images/orange.svg";

function Main() {
    return(
        <main className="main">
            <div className="main__container">
            <img src={grape} className="main__image" alt="grape" />
            <img src={numbers} className="main__image" alt="numbers" />
            <img src={bells} className="main__image" alt="bells" />
            <img src={lemon} className="main__image" alt="lemon" />
            <img src={bar} className="main__image" alt="bar" />
            <img src={berries} className="main__image" alt="berries" />
            <img src={watermelon} className="main__image" alt="watermelon" />
            <img src={plum} className="main__image" alt="plum" />
            <img src={orange} className="main__image" alt="orange" />
            </div>
        </main>
    );
}

export default Main;