import { useContext } from "react";
import { DataContext } from "../context/DataContext";

function Hand({
    id,
    src,
    alt,
    className,
    top = "auto",
    left = "auto",
    bottom = "auto",
    right = "auto",
}) {
    const { handleOnClick, elementPositioner } = useContext(DataContext);

    elementPositioner(id, top, left, bottom, right);

    return (
        <button
            id={id}
            onClick={(e) => {
                handleOnClick(e);
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
