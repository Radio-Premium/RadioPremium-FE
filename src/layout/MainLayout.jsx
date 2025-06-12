import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";

import Header from "@/components/header";
import MiniPlayer from "@/components/MiniPlayer";
import { useMiniPlayerStore } from "@/store/useMiniPlayerStore";
import { useVideoElementStore } from "@/store/useVideoElementStore";

const MainLayout = () => {
  const videoRef = useRef(null);
  const isVisible = useMiniPlayerStore((state) => state.isVisible);
  const setVideoElement = useVideoElementStore(
    (state) => state.setVideoElement
  );

  useEffect(() => {
    if (videoRef.current) {
      setVideoElement(videoRef.current);
    }
  }, [setVideoElement]);

  return (
    <div className="flex justify-center bg-purple-50">
      <div className="relative min-h-dvh w-full max-w-[480px] bg-white shadow-lg">
        <Header />
        <main>
          <Outlet />
        </main>
        <video
          ref={videoRef}
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
