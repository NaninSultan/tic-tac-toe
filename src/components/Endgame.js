import React, { useState } from "react";

const Endgame = ({ winChecker, setBoard, secondMsg, wins, winner, setWins, firstPlayer, secondPlayer, current }) => {

    const [showHistory, setShowHistory] = useState(true);

    let today = new Date();
    let date = new Date().toLocaleDateString();
    let time = today.getHours() + ":" + today.getMinutes();

    const historyShow = () => setShowHistory(showHistory => !showHistory);

    const retryHandler = () => {
        winChecker(true);
        setBoard(Array(9).fill(null));
    }

    const historyHandler = () => {
        if(winner) {
            setWins([...wins, [`${date} ${time} - ${firstPlayer} vs ${secondPlayer} - ${current} WON!`]]);
            historyShow()
        } else {
            setWins([...wins, [`${date} ${time} - ${firstPlayer} vs ${secondPlayer} - DRAW!`]]);
            historyShow()
        }
    }

    window.onunload = function () {
        localStorage.removeItem('wins')
    }

    const resetHandler = () => {
        window.location.reload();
    }
    
    return (
        <div className="endgame">
            {showHistory && <h1 className="congrats">{secondMsg}</h1>}
            {!showHistory && <ul>
                {wins.map((wins, i) => (
                <li key={i}>
                    <span>{wins}</span>
                </li>
                ))}
            </ul>}
            <br />
            {!showHistory && <button type="submit"
                    className="retry-button"
                    onClick={retryHandler}>
                PLAY AGAIN    
            </button>}
            {showHistory && <button type="retry"
                    className="retry-button"
                    onClick={historyHandler}>
                History
            </button>}
            {!showHistory && <button type="reset"
                    className="retry-button"
                    onClick={resetHandler}>
                RESET GAME  
            </button>}
            <br />
        </div>
    )
}

export default Endgame;