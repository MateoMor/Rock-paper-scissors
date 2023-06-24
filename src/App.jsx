import React, { useContext } from "react";
import { DataContext } from "./context/DataContext";

import Header from "./components/Header";
import GameContainer from "./components/GameContainer";
import RulesButton from "./components/rules/RulesButton";
import Retry from "./components/Retry";
import RulesWindow from "./components/rules/RulesWindow";
import RulesWindowScreen from "./components/rules/RulesWindowScreen";

function App() {
    const { gameContainerVisible } = useContext(DataContext);

    return (
        <div className="bg-[#141539]">
            <main
                id="main"
                className="bg-gradient-to-b from-[#1f3756] to-[#141539] h-screen  flex flex-col items-center max-w-2xl mx-auto overflow-hidden relative"
            >
                <Header />
                {gameContainerVisible && <GameContainer />}
                <Retry />
                <RulesButton />
                <RulesWindowScreen/>
                <RulesWindow />
            </main>
        </div>
    );
}

export default App;
