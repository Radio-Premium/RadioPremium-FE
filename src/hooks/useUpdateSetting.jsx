import axios from "axios";

import { useUserStore } from "@/store/useUserStore";

const useUpdateSetting = (type) => {
  const { settings, setUserSettings } = useUserStore();

  const updateSetting = async () => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      return;
    }

    const updatedSettings = {
      ...settings,
      [type]: !settings[type],
    };

    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/users/${userId}/settings`,
        updatedSettings
      );

      setUserSettings(updatedSettings);
    } catch (error) {
      console.error("setting change failed", error);
    }
  };

  return updateSetting;
};

export default useUpdateSetting;
