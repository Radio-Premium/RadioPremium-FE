import CloseIcon from "@/assets/svgs/icon-close.svg?react";
import PauseIcon from "@/assets/svgs/icon-mini-pause.svg?react";
import PlayIcon from "@/assets/svgs/icon-mini-player.svg?react";
import useChannelPlayback from "@/hooks/useChannelPlayback";

const MiniPlayer = ({ closePlayer }) => {
  const { videoId, selectedChannel, isPlaying, handlePlayPause } =
    useChannelPlayback();
  const { name, logoUrl } = selectedChannel;

  return (
    <div className="flex h-20 w-full justify-between rounded-b-4xl bg-white px-4 shadow-[0_-6px_9px_rgba(0,0,0,0.3)]">
      <div className="flex items-center">
        <img className="ml-2 h-16 w-16" src={logoUrl} alt={`${name} 썸네일`} />
        <p className="ml-2 text-sm font-black">{name}</p>
      </div>
      <video ref={videoId} className="hidden" />
      <div className="flex items-center gap-3">
        {!isPlaying ? (
          <PlayIcon
            className="h-9 w-9 cursor-pointer"
            onClick={handlePlayPause}
          />
        ) : (
          <PauseIcon className="cursor-pointer" onClick={handlePlayPause} />
        )}
        <CloseIcon className="cursor-pointer" onClick={closePlayer} />
      </div>
    </div>
  );
};

export default MiniPlayer;
