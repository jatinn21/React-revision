import React, { useState , useRef } from "react";

export default function UncontrolledComonent() {
    const emailRef = useRef();
    const [email, setEmail] = useState();
  console.log("Uncontrolled", emailRef);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail(emailRef.current?.value);
    }


  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col bg-black text-white gap-10">
      <div>Un-ControlledComponent</div>
      <input
        className=" py-3 px-5 text-black"
        type="text"
        id="email"
        placeholder="Enter your email address"
        onChange={handleSubmit}
        ref={emailRef}
      />

      <p className="text-white">Email: {email}</p>
    </div>
  );
}
