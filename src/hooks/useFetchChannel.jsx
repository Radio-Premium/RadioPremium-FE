import axios from "axios";
import { useEffect, useState } from "react";

const useFetchChannel = (channelId) => {
  const [channelInfo, setChannelInfo] = useState({});

  useEffect(() => {
    const fetchChannel = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/radio-channels/${channelId}`
        );
        setChannelInfo(data);
      } catch (error) {
        console.error("fetch channelInfo failed", error);
      }
    };

    fetchChannel();
  }, [channelId]);

  return channelInfo;
};

export default useFetchChannel;
