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
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-300 via-purple-300 to-indigo-400 flex flex-col justify-center items-center p-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-white drop-shadow-lg">
        Card Memory Game
      </h1>

      {/* Game Statistics Display */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 mb-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-4 text-center drop-shadow-sm">useRef used For Stats</h2>
        <div className="space-y-3">
          <p className="text-white/90 font-semibold flex justify-between">
            <span>Total Cards:</span> 
            <span className="text-white">{gameStats.totalCards}</span>
          </p>
          <p className="text-white/90 font-semibold flex justify-between">
            <span>Matched Cards:</span> 
            <span className="text-white">{gameStats.matchedCount}</span>
          </p>
          <p className="text-white/90 font-semibold flex justify-between">
            <span>Remaining Cards:</span> 
            <span className="text-white">{gameStats.remainingCards}</span>
          </p>
          <p className="text-white/90 font-semibold flex justify-between">
            <span>Completion:</span> 
            <span className="text-white">{gameStats.completionPercentage}%</span>
          </p>
          <p className="text-white/90 font-semibold flex justify-between">
            <span>Attempts:</span> 
            <span className="text-white">{gameStats.attempts}</span>
          </p>
          <div className="w-full h-2 bg-white/10 rounded-full mt-4">
            <div
              className="h-full bg-gradient-to-r from-pink-500 to-violet-500 rounded-full transition-all duration-300"
              style={{ width: `${gameStats.completionPercentage}%` }}
            />
          </div>
        </div>
      </div>

      <div className="card-game-main max-w-[600px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-xl">
        <div className="grid grid-cols-4 gap-4 p-4">
          {cards.map((data) => (
            <div
              key={data.id}
              className="card-game-holder relative group h-[100px] flex justify-center items-center cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => handleCardMatch(data)}
            >
              <img
                className="card-game-img w-full h-full object-cover pointer-events-none rounded-xl shadow-lg transition-transform duration-300"
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