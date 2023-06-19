import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

import paper from "../../assets/icon-paper.svg";

function Paper() {
    const { translateElement } = useContext(DataContext);

    const handleOnClick = (e) => {
        console.log(e);
        translateElement(0, 100, "triangle", e.target.id);
    };


    // Crear una función en javascript que permita posicionar un objeto con las propiedades de position respecto a su tamaño
    return (
        <button
            id="paper"
            onClick={(e) => {
                handleOnClick(e);
            }}
            className="absolute top-0 translate-x-[-50%] translate-y-[-50%] hand paper"
        >
            <div id="paper" className="innerHand">
                <img id="paper" src={paper} alt="Paper" />
            </div>
        </button>
    );
}

export default Paper;
