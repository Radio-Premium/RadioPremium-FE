import { create } from "zustand";

export const useUserStore = create((set) => ({
  settings: {
    isAdDetect: true,
    isReturnChannel: false,
  },

  setUserSettings: ({ isAdDetect, isReturnChannel }) =>
    set({ settings: { isAdDetect, isReturnChannel } }),
}));
