import axios from "axios";
import { useEffect, useState } from "react";

const useChannelInfo = (channelId) => {
  const [channelInfo, setChannelInfo] = useState({});

  useEffect(() => {
    const fetchChannelInfo = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/radio-channels/${channelId}`
        );
        setChannelInfo(data);
      } catch (error) {
        console.error("fetch channelInfo failed", error);
      }
    };

    fetchChannelInfo();
  }, [channelId]);

  return channelInfo;
};

export default useChannelInfo;
