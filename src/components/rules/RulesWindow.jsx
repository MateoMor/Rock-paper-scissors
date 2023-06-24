import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import imageRules from "../../assets/image-rules.svg";

function RulesWindow() {
    const { rulesWindow, closeRulesWindow } = useContext(DataContext);

    return (
        <div
            onClick={() => {
                    closeRulesWindow()
            }}
            id="rulesWindow"
            className="absolute right-[-100vw] w-full h-full flex justify-center"
        >
            <div className="absolute top-[5%]  bg-[#ffffff] rounded-lg  w-[80%] h-[60%] flex flex-col items-center justify-center gap-10">
                <img
                    src={imageRules}
                    alt="Image of rules"
                    className="max-h-[60%] max-w-[80%]"
                />
                <button
                    onClick={() => {
                            closeRulesWindow()
                    }}
                    className="text-[#8A90AC] font-barlow tracking-wide font-bold text-xl hover-default border-[#B3B6C6] border-[3.5px] rounded-md px-4 py-[3px]"
                >
                    CLOSE
                </button>
            </div>
        </div>
    );
}

export default RulesWindow;
