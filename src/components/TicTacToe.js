import React, { useState } from 'react';
import Game from "./Game";
import Login from './Login';

const TicTacToe = () => {

    const [toggle, setToggle] = useState(true);
    const toggleCheck = () => {
        setToggle(toggle => !toggle);
    }

    return (
        <div className="ticTacToe">
            {toggle && <Login toggleCheck={toggleCheck}/>}
            {!toggle && <Game />}
        </div>
    )
}

export default TicTacToe;