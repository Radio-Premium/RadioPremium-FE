import { useEffect, useState } from "react";

import { useChannelStore } from "@/store/useChannelStore";

const useCategorizeChannels = () => {
  const radioChannelList = useChannelStore((state) => state.radioChannelList);
  const interestChannelIds = useChannelStore(
    (state) => state.interestChannelIds
  );
  const [favoriteChannelList, setFavoriteChannelList] = useState([]);
  const [otherChannelList, setOtherChannelList] = useState([]);

  useEffect(() => {
    if (!radioChannelList.length) {
      return;
    }

    const favoriteList = interestChannelIds.map((id) =>
      radioChannelList.find((channelInfo) => channelInfo.id === id)
    );
    setFavoriteChannelList(favoriteList);

    const othersList = radioChannelList.filter(
      (channelInfo) => !interestChannelIds.includes(channelInfo.id)
    );
    setOtherChannelList(othersList);
  }, [radioChannelList, interestChannelIds]);

  return [favoriteChannelList, otherChannelList];
};

export default useCategorizeChannels;
