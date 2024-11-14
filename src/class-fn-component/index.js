import React from "react";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";
import { ClassComponentP } from "./ClassComponent";
import { FunctionComponentP } from "./FunctionalComponent";
import "./style.css";

const ClassFnComponent = (props) => {
  let componentStyle = { border: "1px solid black", padding: "10px" };
  let cards = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "30px",
    gap: "10px",
    border: "1px solid black",
  };

  let cardData = props.Data;

  return (
    <div
      style={{
        background: "pink",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        padding: "20px",
      }}
    >
      <h1># ClassComponent And FunctionalComponent</h1>
      <div
        style={{
          display: "flex",
          gap: "10px",
          padding: "10px",
          marginTop: "20px",
        }}
      >
        <div style={componentStyle}>
          <h1>Class Component Example:</h1>
          <ClassComponent />
        </div>
        <div style={componentStyle}>
          <h1>Functional Component Example:</h1>
          <FunctionalComponent />
        </div>
      </div>

      <h1># Card List</h1>
      <div
        className="App"
        style={{ display: "flex", justifyContent: "space-around", gap: "20px" }}
      >
        <div className="card-container" style={cards}>
          <h1>Class Component Props</h1>

          <div style={{ display: "flex", gap: "10px" }}>
            {cardData.map((card) => (
              <ClassComponentP
                key={card.id}
                name={card.name}
                description={card.description}
                imageUrl={card.imageUrl}
              />
            ))}
          </div>
        </div>

        <div className="card-container" style={cards}>
          <h1>Functional Component Props</h1>

          <div style={{ display: "flex", gap: "10px" }}>
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
      </div>
    </div>
  );
};

export default ClassFnComponent;
