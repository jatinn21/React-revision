import React, { useState } from "react";

export default function ControlledComponent() {
  const [email, setEmail] = useState();

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col bg-black text-white gap-10">
      <div>ControlledComponent</div>
          <input
              className=" py-3 px-5 text-black"
        type="text"
        id="email"
        placeholder="Enter your email address"
        onChange={handleEmailChange}
        value={email}
          />
          
          <p>Email: {email}</p>
    </div>
  );
}
