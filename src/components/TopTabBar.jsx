import { useState } from "react";

const TabBar = () => {
  const [activeTab, setActiveTab] = useState("home");

  const tabItems = [
    { key: "home", label: "Home" },
    { key: "setting", label: "Setting" },
  ];

  return (
    <div className="mt-5 flex bg-white px-4 text-black">
      {tabItems.map((tabItem) => (
        <div
          key={tabItem.key}
          className="relative w-full cursor-pointer text-center text-xl font-bold"
          onClick={() => setActiveTab(tabItem.key)}
          style={{
            color: activeTab === tabItem.key ? "black" : "gray",
          }}
        >
          {tabItem.label}
          {activeTab === tabItem.key && (
            <div
              style={{
                position: "absolute",
                marginTop: "10px",
                left: "0",
                width: "100%",
                height: "5px",
                backgroundColor: "black",
                borderRadius: "10px",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default TabBar;
