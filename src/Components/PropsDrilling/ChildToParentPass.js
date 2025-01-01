import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

const ChildCounter = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);

  console.log("Child Rendered");

  useImperativeHandle(ref, () => ({
    increment: () => {
      console.log("Child: Increment called");
      setCount((prev) => prev + 1);
    },
  }));

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-semibold text-gray-800">Child Counter</h2>
      <p className="text-gray-800">Current Count: {count}</p>
    </div>
  );
});

export const ParentCounter = () => {
  const [total, setTotal] = useState(0);
  const childRef = useRef();

  console.log("Parent Rendered");

  const handleIncrement = () => {
    console.log("Parent: Increment called");

    childRef.current.increment();
    setTotal((prev) => prev + 1);
  };

  return (
    <div className="mt-4">
      <br/>
      <br/>
      <br/>
      <div className="text-2xl font-bold text-gray-800 mb-4">#Child to parent pass</div>
      <h1 className="text-3xl font-semibold text-gray-800">Parent Counter</h1>
      <p className="text-gray-800">Total Count: {total}</p>
      <button
        onClick={handleIncrement}
        className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
      >
        Increment
      </button>
      <ChildCounter ref={childRef} />
    </div>
  );
};