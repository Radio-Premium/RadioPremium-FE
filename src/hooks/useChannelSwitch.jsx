import { useCallback } from "react";

import { getRandomNoAdChannel } from "@/apis/radioChannels";
import useControlStreamingSwitch from "@/hooks/useControlStreamingSwitch";
import { useChannelStore } from "@/store/useChannelStore";
import { useVideoElementStore } from "@/store/useVideoElementStore";

const useChannelSwitch = () => {
  const videoElement = useVideoElementStore((state) => state.videoElement);
  const prevChannelId = useChannelStore((state) => state.prevChannelId);
  const selectedChannelId = useChannelStore((state) => state.selectedChannelId);
  const setIsChannelChanged = useChannelStore(
    (state) => state.setIsChannelChanged
  );
  const setPrevChannelId = useChannelStore((state) => state.setPrevChannelId);
  const controlStreamingSwitch = useControlStreamingSwitch();

  const handleChannelSwitch = useCallback(
    async (isAd) => {
      try {
        let channelId = 0;
        if (isAd) {
          try {
            const { data } = await getRandomNoAdChannel();
            channelId = data.id;
            setIsChannelChanged(true);
            setPrevChannelId(selectedChannelId);
          } catch (error) {
            console.error("fetch randomNoAdchannel failed", error);
          }
        } else {
          if (prevChannelId === null || prevChannelId === undefined) {
            return;
          }

          channelId = prevChannelId;
          setIsChannelChanged(false);
          setPrevChannelId(null);
        }

        await controlStreamingSwitch(videoElement, channelId);
      } catch (error) {
        console.error("switch failed: ", error);
      }
    },
    [
      prevChannelId,
      selectedChannelId,
      setIsChannelChanged,
      setPrevChannelId,
      videoElement,
      controlStreamingSwitch,
    ]
  );

  return handleChannelSwitch;
};

export default useChannelSwitch;
