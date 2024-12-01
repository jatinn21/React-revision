import React, { useState } from "react";

export default function LiftingUpTheStateEx2() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col bg-blue-100 gap-5 p-4">
      <InputFieldContainer label={"Email"} handleInput={setEmail} />
      <InputFieldContainer label={"Password"} handleInput={setPassword} />
      <Summary email={email} password={password} />
    </div>
  );
}

function InputFieldContainer({ label, handleInput }) {
  function handleChange(e) {
    console.log("Submit : ", label);
    console.log("changes ", e.target.value);
    handleInput(e.target.value);
  }

  return (
    <>
      <label>{label}</label>
      <input className="px-2 py-1" type={label == "Password" ? "password" :"text"} onChange={handleChange} />
    </>
  );
}

function Summary({ email, password }) {
  return (
    <div className="bg-black-300 flex flex-col gap-5 px-4 py-2 border-t border-gray-800 p-4">
      <p className="text-center">Summary </p>
      <h1 className="text-left">Email : {email}</h1>
      <h1>Password : {password}</h1>
    </div>
  );
}
