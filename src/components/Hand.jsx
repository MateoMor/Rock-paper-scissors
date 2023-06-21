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
}) {
    const { handleOnClick, elementPositioner } = useContext(DataContext);

    elementPositioner(id, reference, top, left, bottom, right);

    return (
        <button
            id={id}
            onClick={(e) => {
                handleOnClick(e, type);
            }}
            className={`absolute hand ${className}`}
        >
            <div id={id} className="innerHand">
                <img id={id} src={src} alt={alt} />
            </div>
        </button>
    );
}

export default Hand;
