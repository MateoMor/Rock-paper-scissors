import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataContext";
import paper from "../../assets/icon-paper.svg";

function Paper() {
    const { translateElement, sizeElement } = useContext(DataContext);

    const [elementWidth, setElementWidth] = useState(0);
    const [elementHeight, setElementHeight] = useState(0);

    useEffect(() => {
        const handleSizeElement = () => {
            const width = sizeElement("paper", "x", 50);
            const height = sizeElement("paper", "y", 50);
            setElementWidth(width);
            setElementHeight(height);
        };

        handleSizeElement();
    }, [sizeElement]);

    useEffect(() => {
        document
            .getElementById("paper")
            .style.setProperty("top", `-${elementHeight}px`);
        document
            .getElementById("paper")
            .style.setProperty("left", `-${elementWidth}px`);
    }, [elementHeight, elementWidth]);

    const handleOnClick = (e) => {
        translateElement(0, 0, "triangle", e.target.id);
    };

    return (
        <button
            id="paper"
            onClick={(e) => {
                handleOnClick(e);
            }}
            className="absolute hand paper"
        >
            <div id="paper" className="innerHand">
                <img id="paper" src={paper} alt="Paper" />
            </div>
        </button>
    );
}

export default Paper;
