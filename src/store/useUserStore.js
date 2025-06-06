import { create } from "zustand";

export const useUserStore = create((set) => ({
  settings: {
    isAdDetect: true,
    isReturnChannel: false,
  },
  interestChannels: [],

  setUserSettings: ({ isAdDetect, isReturnChannel }) =>
    set({ settings: { isAdDetect, isReturnChannel } }),
  setInterestChannels: (interestChannels) => set({ interestChannels }),
}));
