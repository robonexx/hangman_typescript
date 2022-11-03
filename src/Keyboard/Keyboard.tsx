import React from "react";
import "./Keyboard.css";

export default function Keyboard() {
  const active = "active";
  const inactive = "inactive";
  return (
    <div className="keyboard">
      {KEYBOARD_KEYS.map((letter) => (
        /* ${active} ${inactive} */
        <button key={letter} className={`btn ${""}`}>
          {letter}
        </button>
      ))}
    </div>
  );
}

/* letters array for keyboard keys */
const KEYBOARD_KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
