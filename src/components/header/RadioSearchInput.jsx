import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchThinIcon from "@/assets/svgs/icon-search-thin.svg?react";

const RadioSearchInput = () => {
  const navigate = useNavigate();
  const [isInputClicked, setIsInputClicked] = useState(false);

  return (
    <div className="flex w-full justify-center pt-10">
      <div className="flex w-full max-w-md items-center gap-2 px-4">
        <div className="flex h-11 flex-1 items-center rounded-4xl bg-neutral-200 px-4">
          <SearchThinIcon className="mr-2" />
          <input
            onFocus={() => setIsInputClicked(true)}
            onBlur={() => setIsInputClicked(false)}
            type="text"
            placeholder={isInputClicked ? " " : "Search by radio name"}
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
    </div>
  );
};

export default RadioSearchInput;
