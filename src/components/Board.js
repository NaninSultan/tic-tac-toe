import React from 'react';
import Square from './Square';

const Board = ({ squares, handleClick }) => (

    <div className="board">
        {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => handleClick(i)} />
        ))}
    </div>
)

export default Board;