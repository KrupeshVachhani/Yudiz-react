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
    <div className="w-full flex justify-center flex-col">
      <h1 className="text-center">Component 1</h1>
      <button
        className="bg-slate-300 p-3 m-3"
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
    <div>
      <h2 className="text-center">Component 2</h2>
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
    <div>
      <h3 className="text-center">Component 3</h3>
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
    <div>
      <h4 className="text-center">Component 4</h4>
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
    <div>
      <h5 className="text-center">Component 5 (Last Child)</h5>
      <p className="text-center">Data received: {data}</p>
      <Component6 />
    </div>
  );
};

const Component6 = () => {
  return <ParentCounter />;
};
export default Component1;
