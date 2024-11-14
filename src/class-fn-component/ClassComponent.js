// ClassComponent.js

import React, { Component } from "react";
import "./style.css";

class ClassComponent extends Component {
  state = {
    count: 0,
    color: "blue",
    isVisible: true,
  };

  increment = () => this.setState({ count: this.state.count + 1 });
  changeColor = () =>
    this.setState({ color: this.state.color === "blue" ? "red" : "blue" });
  toggleVisibility = () => this.setState({ isVisible: !this.state.isVisible });

  render() {
    const { count, color, isVisible } = this.state;

    return (
      <div className="class-component">
        <h2 className="class-title">Class Component</h2>
        <p className="count-text">Count: {count}</p>
        <button onClick={this.increment} className="increment-button">
          Increment
        </button>

        <p className="color-text" style={{ color: color }}>
          Color
        </p>
        <button onClick={this.changeColor} className="color-button">
          Change Color
        </button>

        <button onClick={this.toggleVisibility} className="visibility-button">
          Toggle Visibility
        </button>
        {isVisible && <p className="visible-content">Visible Content</p>}
      </div>
    );
  }
}

export class ClassComponentP extends Component {
  render() {
    const { name, description, imageUrl, onClickHandler } = this.props;

    return (
      <>
        <div className="card" onClick={onClickHandler}>
          <img src={imageUrl} alt={name} className="card-image" />
          <h3 className="card-title">{name}</h3>
          <p className="card-description">{description}</p>
        </div>
      </>
    );
  }
}

export default ClassComponent;
