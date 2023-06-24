import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

function Rules() {
    const { rulesWindow, setRulesWindow, translateElement } =
        useContext(DataContext);

    return (
        <button
            className="font-barlow font-extralight tracking-widest text-white py-1 px-8 border-solid border-[1.7px]  border-white rounded-md absolute bottom-7 hover-default z-0"
            onClick={() => {
                if (!rulesWindow) {
                    setRulesWindow(true);
                    document.getElementById("rulesWindowScreen").style.display = "flex"
                    translateElement(50, 50, "rulesWindow", "0.4s");
                }
            }}
        >
            RULES
        </button>
    );
}

export default Rules;
