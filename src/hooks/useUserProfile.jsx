import axios from "axios";
import { useEffect } from "react";

import { useUserStore } from "@/store/useUserStore";

const useUserProfile = (userId) => {
  const { setUserSettings } = useUserStore();

  useEffect(() => {
    if (!userId) {
      return;
    }

    const initUserProfile = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_API_URL}/users/${userId}`
        );
        const { isAdDetect, isReturnChannel } = response.data;
        setUserSettings({ isAdDetect, isReturnChannel });
      } catch (error) {
        console.error("fetch user profile failed: ", error);
      }
    };
    initUserProfile();
  }, [userId, setUserSettings]);
};

export default useUserProfile;
