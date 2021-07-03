import React from 'react';



const Navbar = ({ draw, scoreOne, scoreTwo }) => {



    let firstPlayer = localStorage.getItem('playerOne');
    let secondPlayer = localStorage.getItem('playerTwo');

    return (
        <div className="navbar">
            <h1 className="score">{firstPlayer} {scoreTwo} - {scoreOne} {secondPlayer}</h1>
            <h1>Ties: {draw}</h1>
        </div>
    )
}

export default Navbar;