import React from "react";
import { checkGuess } from "../../game-helpers";

function SingleGuessFeedback({ guess, answer }) {
  let feedback = checkGuess(guess, answer);
  return (
    <li key={guess + Math.random()} className="guess">
      {feedback.map((letter, index) => (
        <span key={index} className={`cell ${letter.status}`}>
          {letter.letter}
        </span>
      ))}
    </li>
  );
}
export default SingleGuessFeedback;
