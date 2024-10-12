import React from "react";

function PreviousGuesses({ guessList }) {
  return (
    <ol class="guess-results">
      {guessList.map((guess) => (
        <li class="guess">{guess}</li>
      ))}
    </ol>
  );
}

export default PreviousGuesses;
