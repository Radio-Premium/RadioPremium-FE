import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchThinIcon from "@/assets/svgs/icon-search-thin.svg?react";
import { useSearchStore } from "@/store/useSearchStore";

const RadioSearchInput = () => {
  const navigate = useNavigate();
  const keyword = useSearchStore((state) => state.keyword);
  const setKeyword = useSearchStore((state) => state.setKeyword);
  const [isInputClicked, setIsInputClicked] = useState(false);

  return (
    <div className="flex w-full justify-center pt-10">
      <div className="flex w-full max-w-md items-center gap-2 px-4">
        <div className="flex h-11 flex-1 items-center rounded-4xl bg-neutral-200 px-4">
          <SearchThinIcon className="mr-2" />
          <input
            value={keyword}
            onFocus={() => setIsInputClicked(true)}
            onBlur={() => setIsInputClicked(false)}
            onChange={(e) => setKeyword(e.target.value)}
            type="text"
            placeholder={!isInputClicked && "채널 이름을 입력해 주세요"}
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
