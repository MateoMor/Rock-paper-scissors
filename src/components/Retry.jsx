import { useContext } from "react";
import { DataContext } from "../context/DataContext";

function Retry() {
    const { result } = useContext(DataContext);

    return (
        <div className="flex flex-col items-center">
            <h2 className="font-barlow text-white text-[46px] font-extrabold tracking-wide">
                {result ? "YOU WIN" : "YOU LOSE"}
            </h2>
            <button className="font-barlow tracking-wider bg-white px-10 py-1 rounded-md">PLAY AGAIN</button>
        </div>
    );
}

export default Retry;
