import React, { forwardRef, useRef } from "react";

export default function ForwardRef() {
  const emailRef1 = useRef();
  const passwordRef1 = useRef();

  const emailRef2 = useRef();
  const passwordRef2 = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Submit Values : \n",
      emailRef1.current.value,
      "\n",
      passwordRef1.current.value
    );
    console.log("--------------------------------");
    console.log(
      "Submit Values : \n",
      emailRef2.current.value,
      "\n",
      passwordRef2.current.value
    );
  };

  return (
    <div>
      <h1>ForwardRef</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-5">
        <BeforeReact19Input label="email" ref={emailRef1} />
        <BeforeReact19Input label="password" ref={passwordRef1} />
        <hr />
        <AfterReact19Input label="email" ref={emailRef2} />
        <AfterReact19Input label="password" ref={passwordRef2} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

const BeforeReact19Input = forwardRef((props, ref) => {
  return (
    <input
      type={props.label === "password" ? "password" : "text"}
      name={props.label}
      className="p-3"
      ref={ref}
    />
  );
});

const AfterReact19Input = (props) => {
    console.log('props', props);
  return (
    <input
      type={props.label === "password" ? "password" : "text"}
      name={props.name}
      className="p-3"
      ref={props.ref}
    />
  );
};
