import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useChannelStore } from "@/store/useChannelStore";

const useChannelSwitchOnAd = () => {
  const prevChannelId = useChannelStore((state) => state.prevChannelId);
  const setPrevChannelId = useChannelStore((state) => state.setPrevChannelId);
  const navigate = useNavigate();

  const handleChannelSwitch = useCallback(
    async (isAd) => {
      try {
        let channelId = 0;
        if (isAd) {
          // TODO: 광고 없는 채널 id 랜덤으로 불러오기
          channelId = 3;
          setPrevChannelId(channelId);
        } else {
          channelId = prevChannelId;
          setPrevChannelId(null);
        }
        navigate(`/channel/${channelId}`);
      } catch (error) {
        console.error("switch failed: ", error);
      }
    },
    [prevChannelId, setPrevChannelId, navigate]
  );

  return handleChannelSwitch;
};

export default useChannelSwitchOnAd;
