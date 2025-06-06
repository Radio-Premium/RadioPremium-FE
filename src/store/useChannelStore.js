import { create } from "zustand";

export const useChannelStore = create((set) => ({
  prevChannelId: null,
  selectedChannelId: null,

  setPrevChannelId: (channelId) => set({ prevChannelId: channelId }),
  setSelectedChannelId: (channelId) => set({ selectedChannelId: channelId }),
}));
