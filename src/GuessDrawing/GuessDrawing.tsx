import React from "react";

import "./GuessDrawing.css";

/* creating bars that will show when guess is right */
/* Not desided yet maybe one bar that fills up when you get letters right then bars that dissapear = amount of times left */

type GuessDrawingProps = {
  guesses: number;
};

const Guess1 = (
  <div>
    <div className="guessesDraw"></div>
  </div>
);
const Guess2 = (
  <div>
    <div className="guessesDraw"></div>
  </div>
);
const Guess3 = (
  <div>
    <div className="guessesDraw"></div>
  </div>
);
const Guess4 = (
  <div>
    <div className="guessesDraw"></div>
  </div>
);
const Guess5 = (
  <div>
    <div className="guessesDraw"></div>
  </div>
);
const Guess6 = (
  <div>
    <div className="guessesDraw"></div>
  </div>
);

const GUESSES_DONE = [Guess1, Guess2, Guess3, Guess4, Guess5, Guess6];

export function GuessDrawing({ guesses }: GuessDrawingProps) {
  return (
    <div className="guessDrawing">
      <h2>Guesses left</h2>
      <div className="guessesLeft">
        {GUESSES_DONE.slice(0, guesses)}
        {/* {Guess1}
        {Guess2}
        {Guess3}
        {Guess4}
        {Guess5}
        {Guess6} */}
      </div>
    </div>
  );
}
