import React, { useContext } from "react";
import Header from "./components/Header";
import { DataContext, DataProvider } from "./context/DataContext";
import GameContainer from "./components/GameContainer";
import RulesButton from "./components/RulesButton";
import Retry from "./components/Retry";
import RulesWindow from "./components/RulesWindow";

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
                    <RulesWindow/>
                    <RulesButton />
                </main>
            </div>
    );
}

export default App;
