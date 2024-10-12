import React from "react";

function GuessForm({ guessList, setGuessList }) {
  const [guess, setGuess] = React.useState("");

  function handleEnter(event) {
    event.preventDefault();
    if (guess.length === 5) {
      console.log("guess is", guess);
      let newGuessList = [...guessList, guess.toUpperCase()];
      setGuessList(newGuessList);
      setGuess("");
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
        onChange={(event) => handleInputChange(event)}
      ></input>
    </form>
  );
}

export default GuessForm;
