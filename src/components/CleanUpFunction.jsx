import React, { useEffect, useState } from "react";

export default function CleanUpFunction() {
  const [date, setDate] = useState(`${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`);

    useEffect(() => {  
        const time = setInterval(() => {
            const now = new Date();
            setDate(`${now.toLocaleDateString()} - ${now.toLocaleTimeString()}`);
        }, 1000)
        
        return () => {
            clearInterval(time);
        }
    },[])

  return (
    <div className="h-screen w-full bg-gray-300 flex flex-col justify-center items-center gap-5">
      <h1 className="text-2xl font-semibold">Today's Data and Time</h1>
          <h1 className="text-xl ">{date}</h1>
    </div>
  );
}
