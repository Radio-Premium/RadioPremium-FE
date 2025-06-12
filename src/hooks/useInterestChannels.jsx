import axios from "axios";
import { useEffect } from "react";

import { useChannelStore } from "@/store/useChannelStore";

const useInterestChannels = (userId) => {
  const setInterestChannelIds = useChannelStore(
    (state) => state.setInterestChannelIds
  );

  useEffect(() => {
    if (!userId) {
      return;
    }

    const getInterestIds = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKEND_API_URL}/users/${userId}/interest-channels`
        );
        const ids = data.map((item) => item.channelId);
        setInterestChannelIds(ids);
      } catch (error) {
        console.error("fetch interestIds failed: ", error);
      }
    };
    getInterestIds();
  }, [userId, setInterestChannelIds]);
};

export default useInterestChannels;
