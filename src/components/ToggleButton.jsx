import { useState } from "react";

const ToggleButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <>
      <button
        className={`relative h-9 w-17 cursor-pointer rounded-full transition-colors duration-200 ${
          isActive ? "bg-black" : "bg-neutral-300"
        }`}
        onClick={handleToggle}
      >
        <div
          className={`absolute top-1 left-1 h-7 w-7 rounded-full bg-white duration-400 ${
            isActive ? "translate-x-8" : "translate-x-0"
          }`}
        />
      </button>
    </>
  );
};

export default ToggleButton;
