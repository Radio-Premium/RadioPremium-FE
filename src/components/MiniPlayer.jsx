import CloseIcon from "@/assets/svgs/icon-close.svg?react";
import PauseIcon from "@/assets/svgs/icon-mini-pause.svg?react";
import PlayIcon from "@/assets/svgs/icon-mini-play.svg?react";
import useChannelPlayback from "@/hooks/useChannelPlayback";
import { useMiniPlayerStore } from "@/store/useMiniPlayerStore";
import { usePlayingStore } from "@/store/usePlayingStore";
import { useVideoElementStore } from "@/store/useVideoElementStore";
import { stopWhisperServer } from "@/utils/stopWhisperServer";

const MiniPlayer = () => {
  const videoElement = useVideoElementStore((state) => state.videoElement);
  const { selectedChannel, isPlaying, handlePlayPause } =
    useChannelPlayback("mini");
  const { closeMiniPlayer } = useMiniPlayerStore();
  const { setIsPlaying } = usePlayingStore();
  const { name, logoUrl } = selectedChannel;

  const handleClose = () => {
    videoElement.pause();
    videoElement.src = "";
    setIsPlaying(false);
    closeMiniPlayer();

    const userId = localStorage.getItem("userId");
    stopWhisperServer(userId);
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
            onClick={handlePlayPause}
          />
        ) : (
          <PauseIcon className="cursor-pointer" onClick={handlePlayPause} />
        )}
        <CloseIcon className="cursor-pointer" onClick={handleClose} />
      </div>
    </div>
  );
};

export default MiniPlayer;
