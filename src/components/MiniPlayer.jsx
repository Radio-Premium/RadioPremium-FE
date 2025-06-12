import { useRef } from "react";

import CloseIcon from "@/assets/svgs/icon-close.svg?react";
import PauseIcon from "@/assets/svgs/icon-mini-pause.svg?react";
import PlayIcon from "@/assets/svgs/icon-mini-play.svg?react";
import useChannelPlayback from "@/hooks/useChannelPlayback";
import { useMiniPlayerStore } from "@/store/useMiniPlayerStore";
import { usePlayingStore } from "@/store/usePlayingStore";
import { stopWhisperServer } from "@/utils/stopWhisperServer";
import { getGlobalVideo } from "@/utils/videoElement";

const MiniPlayer = () => {
  const { selectedChannel, isPlaying, handlePlayPause } =
    useChannelPlayback("mini");
  const { closeMiniPlayer } = useMiniPlayerStore();
  const { setIsPlaying } = usePlayingStore();
  const { name, logoUrl } = selectedChannel;

  const handleClose = () => {
    const video = getGlobalVideo();
    video.pause();
    video.src = "";
    setIsPlaying(false);
    closeMiniPlayer();

    const userId = localStorage.getItem("userId");
    stopWhisperServer(userId);
  };

  const isProcessing = useRef(false);

  const handlePlayPauseOnce = async () => {
    if (isProcessing.current) {
      return;
    }

    isProcessing.current = true;

    await handlePlayPause();

    isProcessing.current = false;
  };

  return (
    <div className="absolute bottom-0 flex h-20 w-full justify-between rounded-t-4xl bg-white px-4 shadow-[0_-6px_9px_rgba(0,0,0,0.3)]">
      <div className="flex items-center">
        <img className="ml-2 h-16 w-16" src={logoUrl} alt={`${name} 썸네일`} />
        <p className="ml-2 text-sm font-black">{name}</p>
      </div>
      <div className="flex items-center gap-3">
        {!isPlaying ? (
          <PlayIcon
            className="h-9 w-9 cursor-pointer"
            onClick={handlePlayPauseOnce}
          />
        ) : (
          <PauseIcon className="cursor-pointer" onClick={handlePlayPauseOnce} />
        )}
        <CloseIcon className="cursor-pointer" onClick={handleClose} />
      </div>
    </div>
  );
};

export default MiniPlayer;
