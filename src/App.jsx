import { useState } from "react";
import "./App.css";

function App() {
  // make all state variables for the project
  const [secretNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);
  const maxAttempts = 3;

  // const randomNumber = 
  // setSecretNumber(randomNumber);

  console.log(secretNumber);

  // grab the users input
    const handleChange = (event) => {
      setGuess(event.target.value);
  };

    const handleSubmit = (event) => {
      event.preventDefault();

      // convert the number in string to an integer value
      const numGuess = parseInt(guess, 10);
      setAttempts(attempts + 1);

      if (numGuess < secretNumber) {
        setMessage("Too low!");
      } else if (numGuess > secretNumber) {
        setMessage("Too high!");
      } else {
        setMessage(
          `Congratulations! You guessed the number after ${
            attempts + 1
          } attempts, Welldone Champ!.`
        );
      }

      if (attempts + 1 >= maxAttempts) {
        setMessage(
          `Sorry champ!, you've run out of attempts. The secret number was ${secretNumber}.`
        );
      }
    };

  return (
    <div className="guess-box">
      <h1>Number Guesser Game</h1>
      <p>Pick number between 1 and 100</p>
      <p>You have 3 trials to get it right champ!</p>      
      <form onSubmit={handleSubmit}>
        {/* add an input to grab the users guess */}
        <input
          type="number"
          value={guess}
          onChange={handleChange}
          min="1"
          max="100"
        />
        {/* add a button to run the function  */}
        <button type="submit" disabled={attempts >= maxAttempts} className="submit-btn">
          Submit Guess
        </button>
      </form>
      <p>{message}</p>
      <p>
        Attempts: {attempts}/{maxAttempts}
      </p>
    </div>
  );
}

export default App;
