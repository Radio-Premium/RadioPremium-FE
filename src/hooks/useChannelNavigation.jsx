import { useNavigate } from "react-router-dom";

import { useChannelStore } from "@/store/useChannelStore";

const useChannelNavigation = () => {
  const navigate = useNavigate();
  const setSelectedChannelId = useChannelStore(
    (state) => state.setSelectedChannelId
  );

  const goToChannelPlayer = (channelId) => {
    setSelectedChannelId(channelId);
    navigate("/channel-player");
  };

  return goToChannelPlayer;
};

export default useChannelNavigation;
