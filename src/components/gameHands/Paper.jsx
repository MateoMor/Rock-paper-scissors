import paper from "../../assets/icon-paper.svg";

function Paper() {
    return (
            <button className="absolute top-0 translate-x-[-50%] translate-y-[-50%] hand paper">
                <div className="innerHand"><img src={paper} alt="Paper" /></div>
            </button>
    );
}

export default Paper;
