import { useContext } from "react";

import { DataContext } from "../context/DataContext";

import paper from "../assets/icon-paper.svg";
import rock from "../assets/icon-rock.svg";
import scissors from "../assets/icon-scissors.svg";

import Hand from "./Hand";

function NewElementGenerator({
    className,
    reference = "element",
    top = "auto",
    left = "auto",
    bottom = "auto",
    right = "auto",
}) {
    const { newElementType } = useContext(DataContext);

    if (newElementType == "rock") {
        return (
            <Hand
                type="rock"
                id="newElement"
                src={rock}
                alt="New rock"
                className={`rock ${className}`}
                reference={reference}
                top={top}
                right={right}
                disabled={true}
            />
        );
    } else if (newElementType == "paper") {
        return (
            <Hand
                type="paper"
                id="newElement"
                src={paper}
                alt="New paper"
                className={`paper ${className}`}
                reference={reference}
                top={top}
                right={right}
                disabled={true}
            />
        );
    } else {
        return (
            <Hand
                type="scissors"
                id="newElement"
                src={scissors}
                alt="New scissors"
                className={`scissors ${className}`}
                reference={reference}
                top={top}
                right={right}
                disabled={true}
            />
        );
    }
}

export default NewElementGenerator;

// Versión prueba

/* import paper from "../assets/icon-paper.svg";
import rock from "../assets/icon-rock.svg";
import scissors from "../assets/icon-scissors.svg";

import Hand from "./Hand";

function NewElementGenerator({
    className,
    reference = "element",
    top = "auto",
    left = "auto",
    bottom = "auto",
    right = "auto",
}) {
    const random = Math.floor(Math.random() * 3);

    if (random == 0) {
        return (
            <div id="newElement" className="absolute w-32 h-32">
                <Hand
                    type="rock"
                    id="newElementChild"
                    src={rock}
                    alt="New rock"
                    className={`rock ${className}`}
                    reference={reference}
                    top={top}
                    right={right}
                />
            </div>
        );
    } else if (random == 1) {
        return (
            <div id="newElement" className="absolute w-32 h-32">
                <Hand
                    type="paper"
                    id="newElementChild"
                    src={paper}
                    alt="New paper"
                    className={`paper ${className}`}
                    reference={reference}
                    top={top}
                    right={right}
                />
            </div>
        );
    } else {
        return (
            <div id="newElement" className="absolute w-32 h-32">
                <Hand
                    type="scissors"
                    id="newElementChild"
                    src={scissors}
                    alt="New scissors"
                    className={`scissors ${className}`}
                    reference={reference}
                    top={top}
                    right={right}
                />
            </div>
        );
    }
}

export default NewElementGenerator; */
