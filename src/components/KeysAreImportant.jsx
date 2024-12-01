import React, { useState } from "react";

export default function KeysAreImportant() {
  const [item, setItem] = useState("");
  const [lists, setLists] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLists([item, ...lists]);
    setItem("");
  };

  return (
    <>
      <div className="text-center p-5 bg-slate-300">KeysAreImportant</div>
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-4 p-5 bg-yellow-200 "
      >
        <input
          className="px-2 py-4"
          type="text"
          placeholder="Enter Item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button className="py-2 px-4 bg-orange-400 text-white" type="submit">
          Add Item
        </button>
      </form>
      <KeysIssue lists={lists} />
    </>
  );
}

const KeysIssue = ({ lists }) => {
  return (
    <ul>
          {lists?.map((item, index) => (
        //   To see the importance of key, just replace teh key value from item to index
        <li key={item} className="bg-slate-500 p-3 flex justify-center items-center gap-2">  
          <span>{item}</span>
          <input type="text" className="px-2 py-4" />
        </li>
      ))}
    </ul>
  );
};
