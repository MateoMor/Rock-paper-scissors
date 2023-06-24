import { useContext } from "react";
import { DataContext } from "../context/DataContext";

function Retry() {
    const { result, resetGameContainer } = useContext(DataContext);

    return (
        <div
            id="playAgain"
            className="hidden flex-col items-center absolute bottom-28 "
        >
            <h2 className="font-barlow text-white text-[46px] font-extrabold tracking-wide">
                {result}
            </h2>
            <button
                onClick={() => resetGameContainer()}
                className="font-barlow tracking-wider bg-white px-10 py-1 rounded-md hover-default"
            >
                PLAY AGAIN
            </button>
        </div>
    );
}

export default Retry;
