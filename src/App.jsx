import React from "react";
import Header from "./components/Header";
import { DataProvider } from "./context/DataContext";
import GameContainer from "./components/GameContainer";
import Rules from "./components/Rules";
import Retry from "./components/Retry";

function App() {
    return (
        <DataProvider>
            <div className="bg-[#141539]">
                <main
                    id="main"
                    className="bg-gradient-to-b from-[#1f3756] to-[#141539] h-screen p-4 flex flex-col items-center max-w-2xl mx-auto"
                >
                    <Header />
                    <GameContainer />
                    <Retry />
                    <Rules />
                </main>
            </div>
        </DataProvider>
    );
}

export default App;
