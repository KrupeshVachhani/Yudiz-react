import React from "react";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";
import { ClassComponentP } from "./ClassComponent";
import { FunctionComponentP } from "./FunctionalComponent";

const ClassFnComponent = (props) => {

    let componentStyle = { border: '1px solid black', padding: '10px' }
    let cards = { display: 'flex', justifyContent: 'center', paddingTop: '30px', gap: '10px', border: '1px solid black' }
    
    let cardData = props.Data;

    return (
        <>
            <div style={{ display: 'flex', gap: '10px', padding: '10px' }}>
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
            </div>
        </>
    )
}

export default ClassFnComponent;