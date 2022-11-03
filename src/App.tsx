import { useState } from "react";
import words from "../wordlist.json";
import "./App.css";

/* 
todo in project
create word to guess function using use state (easy version)
create keyboard
create guess word "line"
create hangman or other way of showing amount of guesses
*/

function App() {
  const [wordGuess, setWordGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  return (
    <div className="App">
      <h1>Hangman</h1>
      <h2>{wordGuess}</h2>
    </div>
  );
}

export default App;

/* 
wordlist used in this project
https://www.randomlists.com/data/words.json 
*/
