import { useRef } from "react";

import { SETTING_TYPES } from "@/constants/settingOptions";
import { useChannelStore } from "@/store/useChannelStore";
import { useUserStore } from "@/store/useUserStore";
import controlStreamingPlayback from "@/utils/playControl";

const useChannelPlayback = () => {
  const { selectedChannelId, radioChannelList, isPlaying, setIsPlaying } =
    useChannelStore();
  const { settings } = useUserStore();
  const isAdDetect = settings[SETTING_TYPES.AD_DETECT];

  const selectedChannel = radioChannelList.find(
    ({ id }) => id === selectedChannelId
  );

  const videoId = useRef(null);

  const handlePlayPause = () => {
    controlStreamingPlayback(videoId, selectedChannelId, isPlaying, isAdDetect);
    setIsPlaying((prev) => !prev);
  };

  return {
    videoId,
    selectedChannel,
    isPlaying,
    handlePlayPause,
  };
};

export default useChannelPlayback;
