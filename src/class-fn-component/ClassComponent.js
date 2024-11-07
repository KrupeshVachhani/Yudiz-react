import React, { Component } from 'react';

class ClassComponent extends Component {

  state = {
    count: 0,
    color: 'blue',
    isVisible: true
  };

  increment = () => this.setState({ count: this.state.count + 1 });

  changeColor = () => this.setState({ color: this.state.color === 'blue' ? 'pink' : 'blue' });

  toggleVisibility = () => this.setState({ isVisible: !this.state.isVisible });

  render() {

    const { count, color, isVisible } = this.state;

    return (
      <div>
        <h2>Class Component</h2>
        <p>Count: {count}</p>
        <button onClick={this.increment}>Increment</button>

        <p style={{ color: color }}>Color</p>

        <button onClick={this.changeColor}>Change Color</button>

        <button onClick={this.toggleVisibility}>Toggle Visibility</button>
        {isVisible && <p>Visible Content</p>}
      </div>
    );
  }
}

//Props with Class
export class ClassComponentP extends Component {
  render() {

    const { name, description, imageUrl, onClickHandler } = this.props;

    return (
      <div className="card" onClick={onClickHandler}>
        <img src={imageUrl} alt={name} className="card-image" />
        <h3 className="card-title">{name}</h3>
        <p className="card-description">{description}</p>
      </div>
    );
  }
}



export default ClassComponent;