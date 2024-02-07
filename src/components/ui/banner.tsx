import React, { useState, useEffect } from "react";

const Banner: React.FC = () => {
  // Array of names
  const names: string[] = ["Valentina", "Emma", "Jessica", "Isabella", "Penelope", "Savannah"];

  // State to store current name index
  const [currentNameIndex, setCurrentNameIndex] = useState(0);

  useEffect(() => {
    // Function to switch to the next name every 3 seconds
    const interval = setInterval(() => {
      setCurrentNameIndex((prevIndex) => (prevIndex + 1) % names.length);
    }, 3000);

    // Clear the interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex pb-2 shadow-sm items-center mb-6 w-screen text-[1.2rem] lg:text-[1.5rem] lg:pb-8 p-2 lg:p-0 font-semibold justify-center">
      <h1 className="text-slate-600 p-4">
        <span className='transition underline bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500 delay-700 duration-300 ease-in-out'>
          {names[currentNameIndex]}
        </span>
       , will you be my valentine?
      </h1>
    </div>
  );
};

export default Banner;
