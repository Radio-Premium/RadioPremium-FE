import { create } from "zustand";

export const useChannelStore = create((set) => ({
  interestChannelIds: [],
  prevChannelId: null,
  radioChannelList: [],

  setInterestChannelIds: (ids) => set({ interestChannelIds: ids }),
  setPrevChannelId: (channelId) => set({ prevChannelId: channelId }),
  setRadioChannelList: (channelList) => set({ radioChannelList: channelList }),
}));
