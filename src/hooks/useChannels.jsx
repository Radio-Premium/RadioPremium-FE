import axios from "axios";
import { useEffect } from "react";

import { useChannelStore } from "@/store/useChannelStore";

const useChannels = () => {
  const { radioChannelList, setRadioChannelList } = useChannelStore();

  useEffect(() => {
    if (radioChannelList.length > 0) {
      return;
    }

    const initChannels = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/radio-channels`
      );
      setRadioChannelList(data);
    };
    initChannels();
  }, [radioChannelList, setRadioChannelList]);
};

export default useChannels;
