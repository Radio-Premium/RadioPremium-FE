import { create } from "zustand";

export const useChannelStore = create((set) => ({
  interestChannelIds: [],
  prevChannelId: null,
  radioChannelList: [],

  setInterestChannelIds: (interestChannelIds) =>
    set({ interestChannelIds: interestChannelIds }),
  setPrevChannelId: (channelId) => set({ prevChannelId: channelId }),
  setRadioChannelList: (channelList) => set({ radioChannelList: channelList }),
}));
