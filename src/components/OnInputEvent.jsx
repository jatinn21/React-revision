import React, { useState } from "react";

function OnInputEvent() {
  const [searchTerm, setSearchTerm] = useState(null);

  function handleInput(e) {
    console.log(e, "e");
    setSearchTerm(e.target.value);
  }
  console.log(searchTerm, " value");

  return (
    <div className="p-5 flex flex-col gap-5 bg-blue-100">
      <input
        type="text"
        value={searchTerm}
        onInput={handleInput} // Triggered on every keystroke
        placeholder="Search..."
      />
      <p>Searching for: {searchTerm}</p>
    </div>
  );
}

export default OnInputEvent;
