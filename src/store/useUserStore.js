import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set) => ({
      setting: {
        isAdDetect: true,
        isReturnChannel: false,
      },

      setUserSettings: ({ isAdDetect, isReturnChannel }) =>
        set({ settings: { isAdDetect, isReturnChannel } }),
    }),
    {
      name: "user-settings",
    }
  )
);
