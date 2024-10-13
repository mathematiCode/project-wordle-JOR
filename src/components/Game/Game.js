import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm";
import PreviousGuesses from "../PreviousGuesses";
import ResultBanner from "../ResultBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [result, setResult] = React.useState("");
  const [numGuesses, setNumGuesses] = React.useState(0);
  return (
    <>
      <PreviousGuesses answer={answer} guessList={guessList}></PreviousGuesses>
      <GuessForm
        guessList={guessList}
        setGuessList={setGuessList}
        answer={answer}
        result={result}
        setResult={setResult}
        numGuesses={numGuesses}
        setNumGuesses={setNumGuesses}
      />
      <ResultBanner
        result={result}
        numGuesses={numGuesses}
        answer={answer}
      ></ResultBanner>
    </>
  );
}

export default Game;
