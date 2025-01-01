import React, { useEffect, useState } from "react";
import { ParentCounter } from "./ChildToParentPass";

// Component 1 (Parent)
const Component1 = () => {
  const [count, setCount] = useState(0);
  const data = count;

  useEffect(() => {
    console.log("Component1 rendered");
  }, []);

  console.log("Rendering Component1");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-300 via-purple-300 to-indigo-400">
      <div className="text-2xl font-bold text-gray-800 mb-4">#Props Drilling</div>
      <h1 className="text-4xl font-semibold text-gray-800 mb-4">Component 1</h1>
      <button
        className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add
      </button>
      <Component2 data={data} />
    </div>
  );
};

// Component 2
const Component2 = ({ data }) => {
  useEffect(() => {
    console.log("Component2 rendered");
  }, [data]);

  console.log("Rendering Component2");

  return (
    <div className="mt-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Component 2</h2>
      <Component3 data={data} />
    </div>
  );
};

// Component 3
const Component3 = ({ data }) => {
  useEffect(() => {
    console.log("Component3 rendered");
  }, [data]);

  console.log("Rendering Component3");

  return (
    <div className="mt-6">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Component 3</h3>
      <Component4 data={data} />
    </div>
  );
};

// Component 4
const Component4 = ({ data }) => {
  useEffect(() => {
    console.log("Component4 rendered");
  }, [data]);

  console.log("Rendering Component4");

  return (
    <div className="mt-6">
      <h4 className="text-xl font-semibold text-gray-800 mb-4">Component 4</h4>
      <Component5 data={data} />
    </div>
  );
};

// Component 5 (Last Child)
const Component5 = ({ data }) => {
  useEffect(() => {
    console.log("Component5 rendered");
  }, [data]);

  console.log("Rendering Component5");

  return (
    <div className="mt-6">
      <h5 className="text-lg font-semibold text-gray-800 mb-4">Component 5 (Last Child)</h5>
      <p className="text-center text-gray-800">Data received: {data}</p>
      <Component6 />
    </div>
  );
};

const Component6 = () => {
  return <ParentCounter />;
};

export default Component1;