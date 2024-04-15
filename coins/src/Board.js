import React, { useState } from "react";
import "./Board.css";
import Coin from "./Coin.js";
import images from "./Images.js";

const Board = () => {
  const [side, setSide] = useState(images[0]);
  const [counter, setCounter] = useState(0);
  const [heads, setHeads] = useState(0);
  const [tails, setTails] = useState(0);
  const [isVisible, setIsVisble] = useState(false);

  const flipCoin = () => {
    const flipResult = Math.floor(Math.random() * images.length);
    setSide(images[flipResult]);
    setCounter(counter + 1);
    flipResult === 0 ? setHeads(heads + 1) : setTails(tails + 1);
    setIsVisble(true);
  };

  return (
    <div className="Board">
      <h1>Let's flip a coin!</h1>
      {isVisible && <Coin side={side} />}
      <h2>Stats:</h2>
      <p>
        <strong>Heads:</strong> {heads}
      </p>
      <p>
        <strong>Tails:</strong> {tails}
      </p>
      <p>
        Out of {counter} flips: There are {heads} heads and {tails} tails.
      </p>
      <button onClick={flipCoin}>Flip Coin</button>
    </div>
  );
};

export default Board;
