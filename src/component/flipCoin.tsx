import { useState } from "react";
import Coin from "./coin";

const FlipCoin = (): JSX.Element => {
  const [side, setSide] = useState<number | null>(null);
  const [flips, setFlips] = useState<number>(0);
  const [heads, setHeads] = useState<number>(0);
  const [tails, setTails] = useState<number>(0);

  const handleFlip = () => {
    const fliped = Math.round(Math.random());
    fliped === 1 ? setHeads(heads + 1) : setTails(tails + 1);
    setSide(fliped + 1);
    setFlips(flips + 1);
  };

  const handleReset = () => {
    setSide(null);
    setFlips(0);
    setHeads(0);
    setTails(0);
  };

  return (
    <div>
      <h1>Let's Flip a coin</h1>
      <div>
        {side === 1 ? (
          <Coin imageUrl={"https://tinyurl.com/react-coin-tails-jpg"} imageAlt={"tails"} />
        ) : (
          <Coin imageUrl={"https://tinyurl.com/react-coin-heads-jpg"} imageAlt={"heads"} />
        )}
      </div>
      <button onClick={handleFlip}>Flip Me</button>
      <h2>
        Out of flips {flips} , there have been {heads} heads and {tails} tails
      </h2>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default FlipCoin;
