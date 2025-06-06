import { create } from "zustand";

export const useChannelStore = create((set) => ({
  radioChannelList: [],
  prevChannelId: null,

  setRadioChannelList: (channelList) => set({ radioChannelList: channelList }),
  setPrevChannelId: (channelId) => set({ prevChannelId: channelId }),
}));
