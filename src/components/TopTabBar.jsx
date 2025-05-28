import { useState } from "react";

const TopTabBar = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="mt-5 flex bg-white px-4 text-black">
      <div className="relative w-1/2 text-center">
        <button
          className="w-full cursor-pointer text-lg font-bold"
          onClick={() => setActiveTab("home")}
          style={{
            color: activeTab === "home" ? "black" : "gray",
          }}
        >
          Home
        </button>
        {activeTab === "home" && (
          <div
            style={{
              position: "absolute",
              marginTop: "10px",
              left: "0",
              width: "100%",
              height: "4px",
              backgroundColor: "black",
              borderRadius: "10px",
            }}
          />
        )}
      </div>

      <div className="relative w-1/2 text-center">
        <button
          className="w-full cursor-pointer text-lg font-bold"
          onClickCapture={() => setActiveTab("setting")}
          style={{
            color: activeTab === "setting" ? "black" : "gray",
          }}
        >
          Setting
        </button>
        {activeTab === "setting" && (
          <div
            style={{
              position: "absolute",
              marginTop: "10px",
              left: "0",
              width: "100%",
              height: "4px",
              backgroundColor: "black",
              borderRadius: "10px",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default TopTabBar;
