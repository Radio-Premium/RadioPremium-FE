import { useNavigate } from "react-router-dom";

import SearchBoldIcon from "@/assets/svgs/icon-search-bold.svg?react";
import RadioPremiumLogo from "@/assets/svgs/radio-premium-logo.svg?react";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-8 ml-6 flex items-center justify-between">
      <div className="flex items-center">
        <RadioPremiumLogo
          className="cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
      <SearchBoldIcon className="mr-6 cursor-pointer" />
    </div>
  );
};

export default Header;
