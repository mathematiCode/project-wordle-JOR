import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm";
import PreviousGuesses from "../PreviousGuesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  return (
    <>
      <PreviousGuesses guessList={guessList}></PreviousGuesses>
      <GuessForm guessList={guessList} setGuessList={setGuessList} />
    </>
  );
}

export default Game;
