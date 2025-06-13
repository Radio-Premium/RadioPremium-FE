import axios from "axios";
import { useEffect } from "react";

import { BACKEND_API_URL } from "@/constants/env";
import { useChannelStore } from "@/store/useChannelStore";

const useChannels = () => {
  const { radioChannelList, setRadioChannelList } = useChannelStore();

  useEffect(() => {
    if (radioChannelList.length > 0) {
      return;
    }

    const initChannels = async () => {
      try {
        const { data } = await axios.get(`${BACKEND_API_URL}/radio-channels`);
        setRadioChannelList(data);
      } catch (error) {
        console.error("fetch radioChannels failed: ", error);
      }
    };
    initChannels();
  }, [radioChannelList, setRadioChannelList]);
};

export default useChannels;
