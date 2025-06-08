import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useChannelStore = create(
  persist((set) => ({
    interestChannelIds: [],
    prevChannelId: null,
    radioChannelList: [],
    selectedChannelId: null,
    isPlaying: false,

    setInterestChannelIds: (interestChannelIds) =>
      set({ interestChannelIds: interestChannelIds }),
    setPrevChannelId: (channelId) => set({ prevChannelId: channelId }),
    setRadioChannelList: (channelList) =>
      set({ radioChannelList: channelList }),
    setSelectedChannelId: (channelId) => set({ selectedChannelId: channelId }),
    setIsPlaying: (updater) =>
      typeof updater === "function"
        ? set((state) => ({ isPlaying: updater(state.isPlaying) }))
        : set({ isPlaying: updater }),
  }))
);
