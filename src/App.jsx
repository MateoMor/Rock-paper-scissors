import React, { useContext } from "react";
import Header from "./components/Header";
import { DataContext, DataProvider } from "./context/DataContext";
import GameContainer from "./components/GameContainer";
import Rules from "./components/Rules";
import Retry from "./components/Retry";

function App() {

    const { gameContainerVisible } = useContext(DataContext);

    return (
        
            <div className="bg-[#141539]">
                <main
                    id="main"
                    className="bg-gradient-to-b from-[#1f3756] to-[#141539] h-screen p-4 flex flex-col items-center max-w-2xl mx-auto"
                >
                    <Header />
                    {gameContainerVisible && <GameContainer />}
                    <Retry />
                    <Rules />
                </main>
            </div>
    );
}

export default App;
