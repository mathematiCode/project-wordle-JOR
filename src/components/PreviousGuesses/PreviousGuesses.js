import React from "react";

function PreviousGuesses({ guessList }) {
  return (
    <ol className="guess-results">
      {guessList.map((guess, index) => (
        <li key={`guess #${index}: ${guess}`} className="guess">
          {guess}
        </li>
      ))}
    </ol>
  );
}

export default PreviousGuesses;
