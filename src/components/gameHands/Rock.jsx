import rock from "../../assets/icon-rock.svg";

function Rock() {
    return (
            <button id="rock" className="absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%] hand rock">
                <div className="innerHand"><img src={rock} alt="Rock" /></div>
            </button>
    );
}

export default Rock;
