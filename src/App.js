// App.js
import React from 'react';
import ClassComponent, { ClassComponentP } from './class-fn-component/ClassComponent.js';
import FunctionalComponent, { FunctionComponentP } from './class-fn-component/FunctionalComponent.js';

export default function App() {
    let componentStyle = { border: '1px solid black', padding: '10px' }
    let cards = { display: 'flex', justifyContent: 'center', paddingTop: '30px', gap: '10px', border: '1px solid black' }

    // Array of objects to be passed as props
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
        <>   <div style={{ display: 'flex', gap: '10px', padding: '10px' }}>
            <div style={componentStyle}>
                <h1>Class Component Example:</h1>
                <ClassComponent />
            </div>
            <div style={componentStyle}>
                <h1>Functional Component Example:</h1>
                <FunctionalComponent />
            </div>
        </div>
            <h1 style={{ textAlign: 'center' }}>Card List</h1>
            <div className="App" style={{ display: 'flex', justifyContent: 'space-around' }}>

                <div className="card-container" style={cards}>
                    {cardData.map((card) => (
                        <ClassComponentP
                            key={card.id}
                            name={card.name}
                            description={card.description}
                            imageUrl={card.imageUrl}
                        />
                    ))}
                </div>

                <div className="card-container" style={cards}>
                    {cardData.map((card) => (
                        <FunctionComponentP
                            key={card.id}
                            name={card.name}
                            description={card.description}
                            imageUrl={card.imageUrl}
                        />
                    ))}
                </div>
            </div></>
    );
}





