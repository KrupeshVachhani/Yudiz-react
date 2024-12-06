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
    <div className="container mx-auto p-6 max-w-md bg-white shadow-lg rounded-xl">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Counter:
          <span className="text-blue-600 ml-2">{counter}</span>
        </h2>

        {isLogged ? (
          <h1 className="text-xl font-semibold text-green-600 mt-4">
            ✅ Logged In
          </h1>
        ) : (
          <h1 className="text-xl font-semibold text-red-600 mt-4">
            ❌ Not Logged In
          </h1>
        )}
      </div>

      <div className="flex flex-col space-y-4">
        <button
          onClick={() => dispatch(increment(2))}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
        >
          Add (+2)
        </button>

        <button
          onClick={() => dispatch(decrement(2))}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
        >
          Decrease (-2)
        </button>

        <button
          onClick={() => dispatch(logged())}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
        >
          Toggle Login
        </button>
      </div>
    </div>
  );
};

export default CounterRedux;
