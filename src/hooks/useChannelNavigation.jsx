import { useNavigate } from "react-router-dom";

import { useChannelStore } from "@/store/useChannelStore";

const useChannelNavigation = () => {
  const navigate = useNavigate();
  const setSelectedChannelId = useChannelStore(
    (state) => state.setSelectedChannelId
  );

  const navigateToChannelPlayer = (channelId) => {
    setSelectedChannelId(channelId);
    navigate("/channel-player");
  };

  return navigateToChannelPlayer;
};

export default useChannelNavigation;
