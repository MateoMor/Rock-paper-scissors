import React from "react";
import Header from "./components/Header";
import { DataProvider } from "./context/DataContext";
import GameContainer from "./components/GameContainer";
import Rules from "./components/Rules";
import Retry from "./components/Retry";

function App() {
    return (
        <DataProvider>
            <main className="bg-gradient-to-b from-[#1f3756] to-[#141539] h-screen p-4 flex flex-col items-center">
                <Header />
                <GameContainer />
                <Retry/>
                <Rules />
            </main>
        </DataProvider>
    );
}

export default App;
