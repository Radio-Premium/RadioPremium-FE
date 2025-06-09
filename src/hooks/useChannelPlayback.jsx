import { SETTING_TYPES } from "@/constants/settingOptions";
import { useChannelStore } from "@/store/useChannelStore";
import { useMiniPlayerStore } from "@/store/useMiniPlayerStore";
import { usePlayingStore } from "@/store/usePlayingStore";
import { useUserStore } from "@/store/useUserStore";
import { controlStreamingPlayback } from "@/utils/playControl";
import { getGlobalVideo } from "@/utils/videoElement";

const useChannelPlayback = (mode) => {
  const { selectedChannelId, radioChannelList } = useChannelStore();
  const { playingChannelId, openMiniPlayer } = useMiniPlayerStore();
  const { isPlaying, setIsPlaying } = usePlayingStore();
  const { settings } = useUserStore();
  const video = getGlobalVideo();
  const isAdDetect = settings[SETTING_TYPES.AD_DETECT];

  const isMiniMode = mode === "mini";
  const targetChannelId = isMiniMode ? playingChannelId : selectedChannelId;

  const selectedChannel = radioChannelList.find(
    ({ id }) => id === targetChannelId
  );

  const isCurrentPlaying = isMiniMode
    ? isPlaying && playingChannelId !== null
    : isPlaying && selectedChannelId === playingChannelId;

  const handlePlayPause = () => {
    if (!isCurrentPlaying) {
      controlStreamingPlayback(video, targetChannelId, false, isAdDetect);
      openMiniPlayer(targetChannelId);
      setIsPlaying(true);
    } else {
      controlStreamingPlayback(video, targetChannelId, true, isAdDetect);
      setIsPlaying(false);
    }
  };

  return {
    videoId: video,
    selectedChannel,
    isPlaying: isCurrentPlaying,
    handlePlayPause,
  };
};

export default useChannelPlayback;
