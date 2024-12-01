export const EventPropagtion = () => {
  const handleGrandParentClick = (e) => {
    e.stopPropagation(); 
    console.log("Grand parent clicked");
  };
  const handleParentClick = (e) => {
    e.stopPropagation(); 
    console.log("Parent clicked");
  };
  const handleChildClick = (e) => {
    e.stopPropagation(); 
    console.log("Child clicked");
  };

  return (
    <div
      className="flex gap-5 bg-blue-500 px-10 py-5 w-fit"
      onClick={handleGrandParentClick}
    >
      <div
        className="flex gap-5 bg-red-300 px-10 py-5"
        onClick={handleParentClick}
      >
        <div
          className="flex gap-5 bg-green-200 px-10 py-5 cursor-pointer"
          onClick={handleChildClick}
        >
          Click me!
        </div>
      </div>
    </div>
  );
};
