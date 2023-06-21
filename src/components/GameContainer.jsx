import triangle from "../assets/bg-triangle.svg";

import paper from "../assets/icon-paper.svg";
import rock from "../assets/icon-rock.svg";
import scissors from "../assets/icon-scissors.svg";

import Hand from "./Hand";

function GameContainer() {
    return (
        <div className="relative my-20 w-36">
            <img id="triangle" src={triangle} alt="Triangle" className="" />

            <Hand
                type="paper"
                id="paper"
                reference="container"
                top={-0.5}
                left={-0.5}
                src={paper}
                alt="Paper hand"
                className="paper"
            />
            <Hand
                type="rock"
                id="rock"
                top={-0.5}
                right={-0.5}
                src={rock}
                alt="Rock hand"
                className="rock"
            />
            <Hand
                type="scissors"
                id="scissors"
                reference="container"
                bottom={0}
                right={50}
                src={scissors}
                alt="scissors hand"
                className={`scissors `}
            />
        </div>
    );
}

export default GameContainer;
