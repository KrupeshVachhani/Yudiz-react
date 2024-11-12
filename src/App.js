import React from 'react';
import ClassFnComponent from './class-fn-component/index.js'
import TimeCLock from './time-changing/TimeClock.js';
import  Game  from "./Card-Memory-Game/Game.js";


export default function App() {

    const cardData = [
        {
            id: 1,
            name: 'Card 1',
            description: 'This is the first card.',
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 2,
            name: 'Card 2',
            description: 'This is the second card.',
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 3,
            name: 'Card 3',
            description: 'This is the third card.',
            imageUrl: 'https://via.placeholder.com/150',
        },
    ];

    return (
        <>
            <ClassFnComponent Data={cardData} />
            <TimeCLock/>
            <Game />

        </>
    );
}