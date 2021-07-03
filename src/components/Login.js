import React, {useState} from "react";

const Login = ({ toggleCheck }) => {

    const [playerOne, setPlayerOne] = useState('');
    const [playerTwo, setPlayerTwo] = useState('');



    const SubmitHandler = (e) => {
        e.preventDefault();
        if(/^$/.test(playerOne) || /^$/.test(playerTwo)) {
        } else {
            setPlayerOne(playerOne);
            setPlayerTwo(playerTwo);
            saveData();
            toggleCheck();
        }
    }

    const saveData = () => {
        localStorage.setItem('playerOne', playerOne);
        localStorage.setItem('playerTwo', playerTwo)
    }

    return (
        <div className="login">
            <h2>Player 1 Name:</h2>
            <input value={playerOne} 
                    onChange={(e) => setPlayerOne(e.target.value)}
                    required />
            <br />
            <h2>Player 2 Name:</h2>
            <input value={playerTwo} 
                    onChange={(e) => setPlayerTwo(e.target.value)}
                    required />
            <br />
            <button className="loginButton" 
                    type="submit"
                    onClick={SubmitHandler}>Submit</button>
        </div>
    )
}

export default Login;