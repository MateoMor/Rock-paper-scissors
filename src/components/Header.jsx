import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import logo from "../assets/logo.svg";

function Header() {
    // useContext importa los datos del contexto global
    const { score } = useContext(DataContext);

    return (
        <div className="border-solid border-[3px]  border-[#606e85] rounded-lg p-4 flex justify-between items-center w-[90%] max-w-[900px] mt-4">
            <div className="py-3 w-24">
                <img src={logo} alt="logo" className="object-contain" />
            </div>
            <div className="bg-white flex flex-col justify-center items-center aspect-square p-3 w-20 h-20 rounded-md">
                <h2 className="font-barlow text-scoreText tracking-wider">Score</h2>
                <p className="font-barlow font-extrabold text-4xl text-darkText">{score}</p>
            </div>
        </div>
    );
}

export default Header;
