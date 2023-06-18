import scissors from "../../assets/icon-scissors.svg";

function Scissors() {
    return (
            <button className="absolute top-0 right-0 translate-x-[50%] translate-y-[-50%] hand scissors">
                <div className="innerHand"><img src={scissors} alt="Scissos" /></div>
            </button>
    );
}

export default Scissors;
