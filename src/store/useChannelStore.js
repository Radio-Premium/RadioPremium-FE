import { create } from "zustand";

export const useChannelStore = create((set) => ({
  radioChannelList: [],
  prevChannelId: null,
  selectedChannelId: null,

  setRadioChannelList: (channelList) => set({ radioChannelList: channelList }),
  setPrevChannelId: (channelId) => set({ prevChannelId: channelId }),
  setSelectedChannelId: (channelId) => set({ selectedChannelId: channelId }),
}));
