import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchThinIcon from "@/assets/svgs/icon-search-thin.svg?react";

const RadioSearchInput = () => {
  const navigate = useNavigate();
  const [isInputClicked, setIsInputClicked] = useState(false);

  return (
    <div className="mt-10 ml-5 flex w-[348px] items-center gap-2">
      <div className="flex h-11 flex-1 items-center rounded-4xl bg-neutral-200 px-4">
        <SearchThinIcon className="mr-2" />
        <input
          onFocus={() => {
            setIsInputClicked(true);
          }}
          onBlur={() => {
            setIsInputClicked(false);
          }}
          type="text"
          placeholder={isInputClicked === true ? " " : "Search by radio name"}
          className="w-full text-sm font-semibold text-neutral-800 outline-none"
        />
      </div>
      <button
        className="cursor-pointer text-lg font-semibold text-neutral-500"
        onClick={() => navigate(-1)}
      >
        취소
      </button>
    </div>
  );
};

export default RadioSearchInput;
