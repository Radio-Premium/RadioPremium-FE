import { Outlet } from "react-router-dom";

import Header from "@/components/header";
import MiniPlayer from "@/components/MiniPlayer";
import { useMiniPlayerStore } from "@/store/useMiniPlayerStore";

const MainLayout = () => {
  const isVisible = useMiniPlayerStore((state) => state.isVisible);

  return (
    <div className="flex justify-center bg-purple-50">
      <div className="relative min-h-dvh w-full max-w-[480px] bg-white shadow-lg">
        <Header />
        <main>
          <Outlet />
        </main>
        <video
          id="global-radio"
          className="hidden"
          playsInline
          autoPlay
          controls={false}
        />
        {isVisible && <MiniPlayer />}
      </div>
    </div>
  );
};

export default MainLayout;
