import { useContext } from "react";
import { DataContext } from "../context/DataContext";

function Hand({
    type,
    id,
    src,
    alt,
    className,
    reference = "element",
    top = "auto",
    left = "auto",
    bottom = "auto",
    right = "auto",
    disabled = false
}) {
    const { handleOnClick, elementPositioner } = useContext(DataContext);

    elementPositioner(id, reference, top, left, bottom, right);

    return (
        <button
            disabled={disabled}
            id={id}
            // Ternary operator used to manage disabled property in the entire button
            onClick={(e) => document.getElementById(e.target.id).disabled ? {} : handleOnClick(e)}
            className={`absolute hand ${className}`}
        >
            <div id={id} className="innerHand">
                <img id={id} src={src} alt={alt} />
            </div>
        </button>
    );
}

export default Hand;
