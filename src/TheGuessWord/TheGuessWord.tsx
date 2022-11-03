import React from "react";
import "./TheGuessWord.css";

export default function TheGuessWord() {
  const word = "word";
  const guessedLetters = ["o"];
  return (
    <div className="guessWord">
      {word.split("").map((letter, idx) => (
        <span className="letterContainer">
          <span
            /* using inline styles to show, would probably have been nice to use styled components, will do so in next project ;) */
            style={{
              visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
