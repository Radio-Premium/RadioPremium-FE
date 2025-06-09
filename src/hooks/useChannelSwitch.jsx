import { useCallback } from "react";

import { getRandomNoAdChannel } from "@/apis/radioChannels";
import { useChannelStore } from "@/store/useChannelStore";

const useChannelSwitch = () => {
  const prevChannelId = useChannelStore((state) => state.prevChannelId);
  const setPrevChannelId = useChannelStore((state) => state.setPrevChannelId);

  const handleChannelSwitch = useCallback(
    async (isAd) => {
      try {
        let channelId = 0;
        if (isAd) {
          try {
            channelId = await getRandomNoAdChannel();
            setPrevChannelId(channelId);
          } catch (error) {
            console.error("fetch randomNoAdchannel failed", error);
          }
        } else {
          channelId = prevChannelId;
          setPrevChannelId(null);
        }
        // TODO: 멈춤없이 라디오 음성을 연속 재생하려면 네비게이팅이 아닌 video의 src 속성을 변경해야 함
        // navigate(`/channel/${channelId}`);
      } catch (error) {
        console.error("switch failed: ", error);
      }
    },
    [prevChannelId, setPrevChannelId]
  );

  return handleChannelSwitch;
};

export default useChannelSwitch;
