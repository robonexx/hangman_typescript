import { useState } from "react";
import words from "../wordlist.json";
import "./App.css";
import { GuessDrawing } from "./GuessDrawing/GuessDrawing";
import Keyboard from "./Keyboard/Keyboard";
import TheGuessWord from "./TheGuessWord/TheGuessWord";

/* 
todo in project
create word to guess function using use state (easy version)
create array of guessed letters (check with word)
create keyboard
create guess word "line"
create hangman or other way of showing amount of guesses
*/

function App() {
  const [wordGuess, setWordGuess] = useState(() => {
    return "Confused";
    /*  return words[Math.floor(Math.random() * words.length)]; */
  });
  const [guessedLetters, setGuessesLetters] = useState<string[]>([
    "w",
    "o",
    "b",
  ]);

  const incorrectGuesses = guessedLetters.filter(
    (letter) => !wordGuess.includes(letter)
  );
  return (
    <div className="App">
      <h1>Word Guess 2022</h1>
      <h2>Information</h2>
      <GuessDrawing guesses={incorrectGuesses.length} />
      <Keyboard />
      {/* <h2 className="guessWord">{wordGuess}</h2> */}
      <TheGuessWord />
      {wordGuess}
    </div>
  );
}

export default App;

/* 
wordlist used in this project
https://www.randomlists.com/data/words.json 
*/
