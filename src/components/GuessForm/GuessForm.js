import React from "react";

function GuessForm() {
  const [guess, setGuess] = React.useState("");
  function handleEnter(event) {
    event.preventDefault();
    if (guess.length === 5) {
      console.log("guess is", guess);
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
        required
        minLength="5"
        maxLength="5"
        value={guess}
        onChange={(event) => handleInputChange(event)}
      ></input>
    </form>
  );
}

export default GuessForm;
