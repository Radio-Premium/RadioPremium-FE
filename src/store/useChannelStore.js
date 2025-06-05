import { create } from "zustand";

export const useChannelStore = create((set) => ({
  radioChannelList: [],
  prevChannelId: null,

  setRadioChannelList: (list) => set({ radioChannelList: list }),
  setPrevChannelId: (id) => set({ prevChannelId: id }),
}));
