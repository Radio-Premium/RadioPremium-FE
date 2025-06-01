import { useNavigate, useLocation } from "react-router-dom";

const TabBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabItems = [
    { label: "Home", path: "/" },
    { label: "Setting", path: "/settings" },
  ];

  return (
    <div className="mt-5 flex bg-white text-black">
      {tabItems.map(({ label, path }) => {
        const isActive = location.pathname === path;

        return (
          <div
            key={label}
            className="w-full cursor-pointer text-center text-xl font-bold"
            onClick={() => navigate(path)}
            style={{
              color: isActive ? "black" : "gray",
            }}
          >
            {label}
            {isActive && <div className="mt-3 h-1 rounded-xl bg-black" />}
          </div>
        );
      })}
    </div>
  );
};

export default TabBar;
