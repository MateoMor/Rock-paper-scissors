import { useContext } from "react";
import { DataContext } from "../context/DataContext";

import triangle from "../assets/bg-triangle.svg";
import paper from "../assets/icon-paper.svg";
import rock from "../assets/icon-rock.svg";
import scissors from "../assets/icon-scissors.svg";

import Hand from "./Hand";
import NewElementGenerator from "./NewElementGenerator";

useContext;

function GameContainer() {
    const { newElement } = useContext(DataContext);

    return (
        <div id="gameContainerDiv" className="relative my-24 w-36">
            <img id="triangle" src={triangle} alt="Triangle" />

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
                alt="Scissors hand"
                className="scissors"
            />
            {newElement && (
                <NewElementGenerator
                    className={"opacity-0"}
                    reference="container"
                    top={50}
                    right={-75}
                />
            )}
        </div>
    );
}

export default GameContainer;
