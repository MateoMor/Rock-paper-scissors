import triangle from "../assets/bg-triangle.svg";

import Rock from "./gameHands/Rock";
import Paper from "./gameHands/Paper";
import Scissors from "./gameHands/Scissors";

function GameContainer() {
    return (
        <div className="relative my-20 w-36">

            <img src={triangle} alt="Triangle" className=""/>

            <Rock />
            <Paper />
            <Scissors/>
        </div>
    );
}

export default GameContainer;
