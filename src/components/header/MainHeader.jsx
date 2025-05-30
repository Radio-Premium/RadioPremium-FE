import { useNavigate } from "react-router-dom";

import RadioPremiumLogo from "@/assets/svgs/icon-radio-premium-logo.svg?react";
import SearchBoldIcon from "@/assets/svgs/icon-search-bold.svg?react";

const MainHeader = ({ showSearchIcon = true }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/search-result");
  };

  return (
    <div className="flex items-center justify-between pt-8 pb-8 pl-6">
      <div className="flex items-center">
        <button className="cursor-pointer" onClick={() => navigate("/")}>
          <RadioPremiumLogo />
        </button>
      </div>
      {showSearchIcon && (
        <SearchBoldIcon
          className="mt-1 mr-6 cursor-pointer"
          onClick={handleClick}
        />
      )}
    </div>
  );
};

export default MainHeader;
