import React from "react";
import { useState } from "react";
import MemoryGame from "./MemoryGame";

//Card Images 
const images = [
  { "src": '...images/Cards/Ace.png'},
  { "src": '...images/Cards/Jack.jpg'},
  { "src": '...images/Cards/Joker.jpg'},
  { "src": '...images/Cards/King.jpg'},
  { "src": '...images/Cards/Queen.jpg'},
  { "src": '...images/Cards/Ten.jpg'}
];


const Cover = '...images/Cards/Cover.png'; 





const Main = () => {

  const [cards, setCards] = useState();
  const [turns, setTurns] = useState(0);

  // Shuffling cards using sort method and assigning a random id to each card using Math random method
    const shuffleCards = () => {
      const shuffledCards = [...images, ...images].sort(() => Math.random() - 0.5)
      .map(() => ({ ...images, id: Math.random()}))
      
    setCards(shuffledCards);
    setTurns(0);

    };


      console.log(cards, turns);


  return (
    <>
    <h1>Memory Game</h1>
    <button onClick={shuffleCards}>New Game</button>
    </>
  
  );

}

export default Main;