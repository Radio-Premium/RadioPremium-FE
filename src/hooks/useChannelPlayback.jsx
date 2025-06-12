import { useRef } from "react";

import { SETTING_TYPES } from "@/constants/settingOptions";
import { useChannelStore } from "@/store/useChannelStore";
import { useMiniPlayerStore } from "@/store/useMiniPlayerStore";
import { usePlayingStore } from "@/store/usePlayingStore";
import { useUserStore } from "@/store/useUserStore";
import { useVideoElementStore } from "@/store/useVideoElementStore";
import { controlStreamingPlayback } from "@/utils/playControl";

const useChannelPlayback = (mode) => {
  const videoElement = useVideoElementStore((state) => state.videoElement);
  const { selectedChannelId, radioChannelList } = useChannelStore();
  const { playingChannelId, openMiniPlayer } = useMiniPlayerStore();
  const { isPlaying, setIsPlaying } = usePlayingStore();
  const { settings } = useUserStore();

  const isProcessing = useRef(false);

  const isAdDetect = settings[SETTING_TYPES.AD_DETECT];

  const isMiniMode = mode === "mini";
  const targetChannelId = isMiniMode ? playingChannelId : selectedChannelId;

  const selectedChannel = radioChannelList.find(
    ({ id }) => id === targetChannelId
  );

  const isCurrentPlaying = isMiniMode
    ? isPlaying && playingChannelId !== null
    : isPlaying && selectedChannelId === playingChannelId;

  const handlePlayPause = async () => {
    if (!isCurrentPlaying) {
      await controlStreamingPlayback(videoElement, targetChannelId, false, isAdDetect);
      openMiniPlayer(targetChannelId);
      setIsPlaying(true);
    } else {
      await controlStreamingPlayback(videoElement, targetChannelId, true, isAdDetect);
      setIsPlaying(false);
    }
  };

  const handlePlayPauseOnce = async () => {
    if (isProcessing.current) {
      return;
    }

    isProcessing.current = true;
    try {
      await handlePlayPause();
    } finally {
      isProcessing.current = false;
    }
  };

  return {
    selectedChannel,
    isPlaying: isCurrentPlaying,
    handlePlayPause: handlePlayPauseOnce,
  };
};

export default useChannelPlayback;
