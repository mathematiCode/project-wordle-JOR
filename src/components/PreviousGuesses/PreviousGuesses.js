import React from "react";

function PreviousGuesses({ guessList }) {
  let temporaryGuessList = [...guessList];
  for (let i = 0; i < 6; i++) {
    if (!temporaryGuessList[i]) {
      temporaryGuessList[i] = "     ";
    }
    if (temporaryGuessList.length > 6) {
      temporaryGuessList = temporaryGuessList.slice(0, 6);
    }
  }
  return (
    <ol className="guess-results">
      {temporaryGuessList.map((guess, index) => (
        <li key={`guess #${index}: ${guess}`} className="guess">
          <span key={1} className="cell">
            {guess[0]}
          </span>
          <span key={2} className="cell">
            {guess[1]}
          </span>
          <span key={3} className="cell">
            {guess[2]}
          </span>
          <span key={4} className="cell">
            {guess[3]}
          </span>
          <span key={5} className="cell">
            {guess[4]}
          </span>
        </li>
      ))}
    </ol>
  );
}

export default PreviousGuesses;
