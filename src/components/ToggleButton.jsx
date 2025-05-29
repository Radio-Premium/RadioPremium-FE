import { useState } from "react";

const toggleSize = {
  s: {
    buttonSize: "h-6 w-12",
    thumbSize: "h-4 w-4",
    activeTranslate: "translate-x-6",
  },
  m: {
    buttonSize: "h-8 w-16",
    thumbSize: "h-6 w-6",
    activeTranslate: "translate-x-8",
  },
};

const ToggleButton = ({ size = "m" }) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleSwitch = () => {
    setIsToggled((prev) => !prev);
  };

  const { buttonSize, thumbSize, activeTranslate } = toggleSize[size];

  return (
    <button
      className={`relative cursor-pointer rounded-full transition-colors duration-200 ${
        isToggled ? "bg-black" : "bg-neutral-300"
      } ${buttonSize}`}
      onClick={toggleSwitch}
    >
      <div
        className={`absolute top-1 left-1 rounded-full bg-white duration-400 ${
          isToggled ? activeTranslate : "translate-x-0"
        } ${thumbSize}`}
      />
    </button>
  );
};

export default ToggleButton;
