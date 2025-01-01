import React, { Component } from "react";

class ClassComponent extends Component {
  state = {
    count: 0,
    color: "blue",
    isVisible: true,
  };

  increment = () => this.setState({ count: this.state.count + 1 });
  changeColor = () => this.setState({ color: this.state.color === "blue" ? "red" : "blue" });
  toggleVisibility = () => this.setState({ isVisible: !this.state.isVisible });

  render() {
    const { count, color, isVisible } = this.state;

    return (
      <div className="flex flex-col items-center gap-4 ">
        <p className="text-lg font-semibold text-gray-700">Count: {count}</p>
        
        <button
          onClick={this.increment}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md shadow-md transition duration-300"
        >
          Increment
        </button>

        <p className="text-lg font-semibold" style={{ color: color }}>
          Color
        </p>
        
        <button
          onClick={this.changeColor}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md shadow-md transition duration-300"
        >
          Change Color
        </button>

        <button
          onClick={this.toggleVisibility}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-md shadow-md transition duration-300"
        >
          Toggle Visibility
        </button>

        {isVisible && (
          <p className="text-gray-700 text-lg mt-2">Visible Content</p>
        )}
      </div>
    );
  }
}

export class ClassComponentP extends Component {
  render() {
    const { name, description, imageUrl, onClickHandler } = this.props;

    return (
      <div 
        onClick={onClickHandler}
        className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden cursor-pointer"
      >
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    );
  }
}


export default ClassComponent;