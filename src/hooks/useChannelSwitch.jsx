import { useCallback } from "react";

import { getRandomNoAdChannel } from "@/apis/radioChannels";
import { SETTING_TYPES } from "@/constants/settingOptions";
import { useChannelStore } from "@/store/useChannelStore";
import { useUserStore } from "@/store/useUserStore";
import { controlStreamingSwitch } from "@/utils/playControl";

const useChannelSwitch = (videoRef) => {
  const prevChannelId = useChannelStore((state) => state.prevChannelId);
  const setPrevChannelId = useChannelStore((state) => state.setPrevChannelId);
  const { settings } = useUserStore();
  const isAdDetect = settings[SETTING_TYPES.AD_DETECT];

  const handleChannelSwitch = useCallback(
    async (isAd) => {
      try {
        let channelId = 0;
        if (isAd) {
          try {
            const { data } = await getRandomNoAdChannel();
            channelId = data.id;
            setPrevChannelId(channelId);
          } catch (error) {
            console.error("fetch randomNoAdchannel failed", error);
          }
        } else {
          if (prevChannelId == null) {
            return;
          }

          channelId = prevChannelId;
          setPrevChannelId(null);
        }

        await controlStreamingSwitch(videoRef, channelId, isAdDetect);
      } catch (error) {
        console.error("switch failed: ", error);
      }
    },
    [prevChannelId, setPrevChannelId, isAdDetect, videoRef]
  );

  return handleChannelSwitch;
};

export default useChannelSwitch;
