import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/actions/counter";
import { logged } from "../../redux/actions/loggedIn";

const CounterRedux = () => {
  const [count, setCount] = useState(0);
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.logged);
  const dispatch = useDispatch();

  useEffect(() => {
    if (counter < 0) {
      alert("Negative counter is not valid");
      dispatch(decrement(counter));
      setCount(0);
    }
  }, [counter, dispatch]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-300 via-purple-300 to-indigo-400">
      <div className="container mx-auto p-8 max-w-md bg-white shadow-2xl rounded-xl">
        <div className="text-center mb-6">
          <div className="text-2xl font-bold text-gray-800 mb-4">
            #Redux Counter
          </div>
          <input
            type="number"
            className="border-2 border-gray-300 rounded-lg px-4 py-2 mb-4 w-full focus:outline-none focus:border-blue-500 transition duration-300"
            onFocus={() => setCount("")}
            onBlur={() => (count === "" ? setCount(0) : setCount(count))}
            onChange={(e) => {
              const numValue = Number(e.target.value);
              setCount(numValue);
            }}
            value={count}
          />
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
            onClick={() => dispatch(increment(count))}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Add (+{count})
          </button>

          <button
            onClick={() => dispatch(decrement(count))}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Decrease (-{count})
          </button>

          <button
            onClick={() => dispatch(logged())}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Toggle Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterRedux;