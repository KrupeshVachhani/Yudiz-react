/* eslint-disable no-console */

import React from "react";

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    console.log("1. constructor() - Initializing state.");
    this.state = {
      count: 0,
      error: null,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      "2. getDerivedStateFromProps() - Syncing props to state if needed."
    );

    return null;
  }

  componentDidMount() {
    console.log("4. componentDidMount() - Component has mounted.");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("nextProps", nextProps, "nextState", nextState);
    console.log("6. shouldComponentUpdate() - Deciding whether to re-render.");
    console.log(this.state.count);
    if (this.state.count >= 5) return false;
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps, "prevState", prevState);
    console.log(
      "8. getSnapshotBeforeUpdate() - Capturing snapshot before DOM updates."
    );
    return null; 
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      "prevProps",
      prevProps,
      "prevState",
      prevState,
      "snapshot",
      snapshot
    );
    console.log("9. componentDidUpdate() - DOM updated.");
  }

  componentWillUnmount() {
    console.log("10. componentWillUnmount() - Cleanup before unmounting.");
  }

  static getDerivedStateFromError(error) {
    console.log(
      "Error Lifecycle: getDerivedStateFromError() - Setting error state."
    );
    return { error: error.message };
  }

  componentDidCatch(error, info) {
    console.log(
      "Error Lifecycle: componentDidCatch() - Logging error.",
      error,
      info
    );
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  triggerError = () => {
    throw new Error("Manual error triggered!");
  };

  render() {
    console.log("3 & 7. render() - Rendering UI.");
    if (this.state.error) {
      return (
        <div className="flex items-center justify-center h-screen   from-pink-300 via-purple-300 to-indigo-400">
          <h1 className="text-3xl font-bold text-red-600">
            Error: {this.state.error}
          </h1>
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center justify-center h-screen   from-pink-300 via-purple-300 to-indigo-400">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          Counter: {this.state.count}
        </h1>
        <div className="space-x-4">
          <button
            onClick={this.increment}
            className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600"
          >
            Increment
          </button>
          <button
            onClick={this.decrement}
            className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
          >
            Decrement
          </button>
          <button
            onClick={this.triggerError}
            className="px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600"
          >
            Trigger Error
          </button>
        </div>
      </div>
    );
  }
}

export default LifecycleDemo;
