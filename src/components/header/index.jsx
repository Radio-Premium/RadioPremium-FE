import { useLocation } from "react-router-dom";

import MainHeader from "@/components/header/MainHeader";
import RadioSearchInput from "@/components/header/RadioSearchInput";
import ReportHeader from "@/components/header/ReportHeader";

const Header = () => {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return <MainHeader />;
  }

  if (pathname === "/search-result") {
    return <RadioSearchInput />;
  }

  if (pathname === "/channel-player") {
    return <ReportHeader />;
  }

  return <MainHeader showSearchIcon={false} />;
};

export default Header;
