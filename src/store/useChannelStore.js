import { create } from "zustand";

export const useChannelStore = create((set) => ({
  prevChannelId: null,

  setPrevChannelId: (channelId) => set({ prevChannelId: channelId }),
}));
