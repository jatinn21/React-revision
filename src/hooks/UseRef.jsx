import React from "react";

export default function UseRef() {

    const emailRef = React.useRef();
    const passwordRef = React.useRef();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Submit Values : \n',emailRef.current.value,"\n",passwordRef.current.value);
    }

  return (
    <div>
      <h1>Using useRef Hook</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-5">
        <input
          type="text"
          name="email"
          placeholder="enter your email address"
          className="p-3"
          ref={emailRef}
        />
        <input
          type="password"
          name="password"
          placeholder="enter your password"
          className="p-3"
          ref={passwordRef}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
