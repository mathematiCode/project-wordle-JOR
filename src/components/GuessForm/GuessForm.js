import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessForm({
  guessList,
  setGuessList,
  answer,
  result,
  setResult,
  numGuesses,
  setNumGuesses,
}) {
  const [guess, setGuess] = React.useState("");

  function handleEnter(event) {
    event.preventDefault();
    if (guess.length === 5) {
      let newGuessList = [...guessList, guess.toUpperCase()];
      setGuessList(newGuessList);
      setNumGuesses(newGuessList.length);
      if (guess === answer) {
        setResult("win");
      }
      setGuess("");
      if (newGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
        setResult("lose");
      }
    }
  }
  function handleInputChange(event) {
    let currentInput = event.target.value;
    currentInput = currentInput.toUpperCase();
    if (currentInput.length <= 5) {
      setGuess(currentInput);
    }
  }
  return (
    <form
      onSubmit={(event) => handleEnter(event)}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        minLength="5"
        maxLength="5"
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={guess}
        disabled={result === "win" || result === "lose"}
        onChange={(event) => handleInputChange(event)}
      ></input>
    </form>
  );
}

export default GuessForm;
