import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set) => ({
      settings: {
        isAdDetect: true,
        isReturnChannel: false,
        adRedirectChannelId: null,
      },

      setUserSettings: (updatedSettings) => set({ settings: updatedSettings }),
    }),
    {
      name: "user-settings",
    }
  )
);
