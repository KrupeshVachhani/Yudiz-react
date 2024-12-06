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
    <div>
      <h2>Child Counter</h2>
      <p>Current Count: {count}</p>
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
    <div>
      <h1>Parent Counter</h1>
      <p>Total Count: {total}</p>
      <button onClick={handleIncrement}>Increment</button>
      <ChildCounter ref={childRef} />
    </div>
  );
};

