export const EventPropagtion = () => {
  const handleGrandParentClick = (e) => {
    console.log("Grand parent clicked");
  };
  const handleParentClick = (e) => {
    console.log("Parent clicked");
  };
  const handleChildClick = (e) => {
    console.log("Child clicked");
  };

  return (
    <div
      className="flex gap-5 bg-blue-500 px-10 py-5 w-fit"
      onClickCapture={handleGrandParentClick}
    >
      <div
        className="flex gap-5 bg-red-300 px-10 py-5"
        onClickCapture={handleParentClick}
      >
        <div
          className="flex gap-5 bg-green-200 px-10 py-5 cursor-pointer"
          onClickCapture={handleChildClick}
        >
          Click me!
        </div>
      </div>
    </div>
  );
};
