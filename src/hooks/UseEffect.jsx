import React from "react";
import { useState } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(0);

  console.log("Parent Component");

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  const handleResetClick = () => {
    setCount(0);
  };

  return (
    <>
      <div className="bg-slate-500 w-100 flex flex-col justify-center items-center gap-3 p-5">
        <p>Count: {count}</p>
        <button className="bg-green-100 px-3 py-1" onClick={handleButtonClick}>
          Increment
        </button>
        <button className="bg-yellow-100 px-3 py-1" onClick={handleResetClick}>
          Reset
        </button>
        <div className="bg-yellow-400 p-5">
          <ChildComponent />
        </div>
      </div>
   
    </>
  );
}

const ChildComponent = () => {
  console.log("Child Component");
  return (
      <p>Child Component</p>
  );
};

export const SiblingComponent = () => {
  console.log("Sibling Component");
    return (
        <div className="bg-green-400 p-5">
      
      <p>Sibling Component</p>
      </div>
  );
};
