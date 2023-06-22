import { useContext } from "react";
import { DataContext } from "../context/DataContext";

function Retry() {
    const { result, resetGameContainer } = useContext(DataContext);

    return (
        <div className="flex flex-col items-center absolute bottom-24 ">
            <h2 className="font-barlow text-white text-[46px] font-extrabold tracking-wide">
                {result ? "YOU WIN" : "YOU LOSE"}
            </h2>
            <button onClick={() => resetGameContainer()} className="font-barlow tracking-wider bg-white px-10 py-1 rounded-md hover-default">PLAY AGAIN</button>
        </div>
    );
}

export default Retry;
