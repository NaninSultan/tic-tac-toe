import React, { useState, useEffect } from 'react';
import Board from './Board';
import Navbar from './Navbar';
import Endgame from './Endgame';

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [msg, setMsg] = useState("")
    const [scoreOne, setScoreOne] = useState(0);
    const [scoreTwo, setScoreTwo] = useState(0);
    const [draw, setDraw] = useState(0);
    const [win, setWin] = useState(true);
    const [secondMsg, setSecondMsg] = useState("");

    const winChecker = () => {
        setWin(win => !win);

    }

    const [wins, setWins] = useState([]);
    const firstPlayer = localStorage.getItem('playerOne');
    const secondPlayer = localStorage.getItem('playerTwo');
    const current = (xIsNext ? secondPlayer : firstPlayer)


    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
 
    const winner = calculateWinner(board);

    const handleClick = (i) => {
        const boardArray = [...board];
        if (boardArray[i]) return setMsg(<h2 className="msg">Choose unoccupied cell!!</h2>);
        boardArray[i] = xIsNext ? 'X' : 'O';
        setBoard(boardArray);
        setXIsNext(!xIsNext);
        setMsg("")

    };

    useEffect(() => {

        if (winner && xIsNext) {
            return (
                setScoreOne((prevScore) => prevScore + 1),
                winChecker(),
                setSecondMsg("Congrats " + current + "!! You won!!")                
            )
        } else if (winner && !xIsNext) {
            return (
                setScoreTwo((prevScore) => prevScore + 1),
                winChecker(),
                setSecondMsg("Congrats " + current + "!! You won!!")
            )
        } else if (board.every(Boolean)) {
            return (
                setDraw((prevScore) => prevScore + 1),
                winChecker(),
                setSecondMsg("It's a DRAW!")
            )
        }
    }, [winner, xIsNext, board, current])

    useEffect(() => {
        const wins = localStorage.getItem('wins')
        if (wins) {
            setWins(JSON.parse(wins))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('wins', JSON.stringify(wins))
    })

    return (
        <div>
            <Navbar draw={draw} scoreOne={scoreOne} scoreTwo={scoreTwo}/>
            {msg}
            <div className="game">
                {!win && <Endgame secondMsg={secondMsg} 
                                    winner={winner} 
                                    setBoard={setBoard} 
                                    winChecker={winChecker}
                                    current={current}
                                    wins={wins}
                                    firstPlayer={firstPlayer}
                                    secondPlayer={secondPlayer}
                                    setWins={setWins}
                                     />}
                {win && <Board handleClick={handleClick} squares={board} />}
                {win && <h1>{(xIsNext ? firstPlayer : secondPlayer) + " is on the move with " + (xIsNext ? "X" : "O")}</h1>}
            </div>

        </div>
    )
}

export default Game;