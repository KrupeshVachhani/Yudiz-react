import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import { cards } from "./Constants";

const Game = () => {
  const [count, setCount] = useState(0);
  const [previousCard, setPreviousCard] = useState(null);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  // useRef to track total attempts
  const attemptsRef = useRef(0);

  // useCallback to memoize the card matching function
  const handleCardMatch = useCallback(
    (card) => {
      // Prevent re-flipping already matched or currently flipped cards
      if (
        flippedCards.includes(card) ||
        matchedCards.includes(card) ||
        flippedCards.length >= 2
      ) {
        return;
      }

      // Increment attempts
      attemptsRef.current += 1;

      setFlippedCards((prevFlipped) => [...prevFlipped, card]);

      if (count === 0) {
        setPreviousCard(card);
        setCount(count + 1);
      } else {
        if (
          previousCard &&
          previousCard.matchingNo === card.matchingNo &&
          previousCard.id !== card.id
        ) {
          // Match found
          setMatchedCards((prevMatched) => [
            ...prevMatched,
            previousCard,
            card,
          ]);
          setFlippedCards([]);

          setTimeout(() => {
            alert("Matched!");
          }, 100);
        } else {
          // No match
          setTimeout(() => {
            setFlippedCards([]);
          }, 1000);
        }

        setPreviousCard(null);
        setCount(0);
      }
    },
    [count, flippedCards, matchedCards, previousCard]
  );

  // useMemo to calculate game statistics
  const gameStats = useMemo(() => {
    const totalCards = cards.length;
    const matchedCount = matchedCards.length;
    const remainingCards = totalCards - matchedCount;
    const completionPercentage = (matchedCount / totalCards) * 100;

    return {
      totalCards,
      matchedCount,
      remainingCards,
      completionPercentage: completionPercentage.toFixed(2),
      attempts: attemptsRef.current,
    };
  }, [matchedCards]);

  useEffect(() => {
    if (matchedCards.length === cards.length) {
      setTimeout(() => {
        alert(`Game completed in ${attemptsRef.current} attempts!`);
        // Reset attempts
        attemptsRef.current = 0;
        setMatchedCards([]);
      }, 1000);
    }
  }, [matchedCards]);

  return (
    <div className="game bg-pink-100 min-h-screen flex flex-col justify-center items-center p-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Card Memory Game
      </h1>

      {/* Game Statistics Display */}
      <div className="mb-4 text-center">
        <h1 className="text-2xl font-semibold">useRef used For Stats</h1>
        {console.log(gameStats)}
        <p className="font-semibold">Total Cards: {gameStats.totalCards}</p>
        <p className="font-semibold">Matched Cards: {gameStats.matchedCount}</p>
        <p className="font-semibold">Remaining Cards: {gameStats.remainingCards}</p>
        <p className="font-semibold">Completion: {gameStats.completionPercentage}%</p>
        <p className="font-semibold">Attempts: {gameStats.attempts}</p>
      </div>

      <div className="card-game-main max-w-[600px] border-2 border-black rounded-lg mt-8 overflow-hidden">
        <div className="grid grid-cols-4 gap-4 p-4">
          {cards.map((data) => (
            <div
              key={data.id}
              className="card-game-holder relative group w-full h-[100px] flex justify-center items-center cursor-pointer"
              onClick={() => handleCardMatch(data)}
            >
              <img
                className="card-game-img w-full h-full object-cover pointer-events-none"
                src={
                  flippedCards.includes(data) || matchedCards.includes(data)
                    ? data.img
                    : "./assets/card.png"
                }
                alt={data.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Game;
