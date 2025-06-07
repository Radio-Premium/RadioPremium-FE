import { create } from "zustand";

export const useChannelStore = create((set) => ({
  interestChannelIds: [],
  prevChannelId: null,
  radioChannelList: [],
  selectedChannelId: null,
  isPlaying: false,

  setInterestChannelIds: (interestChannelIds) =>
    set({ interestChannelIds: interestChannelIds }),
  setPrevChannelId: (channelId) => set({ prevChannelId: channelId }),
  setRadioChannelList: (channelList) => set({ radioChannelList: channelList }),
  setSelectedChannelId: (channelId) => set({ selectedChannelId: channelId }),
  setIsPlaying: (isPlaying) => set({ isPlaying: isPlaying }),
}));
