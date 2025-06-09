import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useChannelStore = create(
  persist(
    (set) => ({
      interestChannelIds: [],
      prevChannelId: null,
      radioChannelList: [],
      selectedChannelId: null,

      setInterestChannelIds: (interestChannelIds) =>
        set({ interestChannelIds }),
      setPrevChannelId: (channelId) => set({ prevChannelId: channelId }),
      setRadioChannelList: (channelList) =>
        set({ radioChannelList: channelList }),
      setSelectedChannelId: (channelId) =>
        set({ selectedChannelId: channelId }),
    }),
    {
      name: "channel-storage",
    }
  )
);
