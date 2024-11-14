import React, { useState, useEffect } from "react";
import { cards } from "./Constants";
import "./Game.css";

const Game = () => {
  const [count, setCount] = useState(0);
  const [previousCard, setPreviousCard] = useState(null);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  function handleCardMatch(card) {
    setFlippedCards((flippedCards) => [...flippedCards, card]);

    if (count === 0) {
      setPreviousCard(card);
      setCount(count + 1);
    } else {
      if (
        previousCard &&
        previousCard.matchingNo === card.matchingNo &&
        previousCard.id !== card.id
      ) {
        setMatchedCards((matchedCards) => [
          ...matchedCards,
          previousCard,
          card,
        ]);
        setFlippedCards([]);
        setTimeout(() => {
          alert("Matched!");
        }, 100);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 500);
      }
      setPreviousCard(null);
      setCount(0);
    }
  }

  useEffect(() => {
    if (matchedCards.length === cards.length) {
      setTimeout(() => {
        alert("Game completed! All cards will be hidden.");
        setMatchedCards([]);
      }, 1000);
    }
  }, [matchedCards]);

  return (
    <div className="game">
      <h1># Card Memory Game</h1>
      <div className="Card-Game-Main">
        {cards.map((data) => (
          <div
            className="Card-Game-Holder"
            onClick={() => handleCardMatch(data)}
            key={data.id}
          >
            <img
              className="Card-Game-Img"
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
  );
};

export default Game;
