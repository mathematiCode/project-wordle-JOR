import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import SingleGuessFeedback from "../SingleGuessFeedback";

function PreviousGuesses({ guessList, answer }) {
  let placeholderArray = [];
  for (let i = guessList.length; i < NUM_OF_GUESSES_ALLOWED; i++) {
    placeholderArray.push("     ");
  }
  return (
    <ol key="allGuesses" className="guess-results">
      {guessList.map((guess, index) => (
        <SingleGuessFeedback
          guess={guess}
          answer={answer}
          key={`guess #${index}: ${guess}`}
        ></SingleGuessFeedback>
      ))}
      {placeholderArray.map((emptyString) => (
        <li className="guess">
          <span key={0} className="cell">
            {emptyString[0]}
          </span>
          <span key={1} className="cell">
            {emptyString[1]}
          </span>
          <span className="cell">{emptyString[2]}</span>
          <span className="cell">{emptyString[3]}</span>
          <span className="cell">{emptyString[4]}</span>
        </li>
      ))}
    </ol>
  );
}

export default PreviousGuesses;
