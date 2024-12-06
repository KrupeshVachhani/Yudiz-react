import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../actions/counter";
import { logged } from "../../actions/loggedIn";

const CounterRedux = () => {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.logged);
  const dispatch = useDispatch();

  useEffect(() => {
    if (counter < 0) {
      alert("Negative counter is not valid");
      dispatch(decrement(counter));
    }
  }, [counter, dispatch]);

  return (
    <div>
      <div>Counter: {counter}</div>
      {isLogged ? (
        <h1 style={{ color: "green" }}>Logged in true</h1>
      ) : (
        <h1 style={{ color: "red" }}>Logged in false</h1>
      )}
      <div>
        <button onClick={() => dispatch(increment(2))}>Add</button>
        <br />
        <button onClick={() => dispatch(decrement(2))}>Decrease</button>
        <br />
        <button onClick={() => dispatch(logged())}>Toggle Login</button>
      </div>
    </div>
  );
};

export default CounterRedux;
