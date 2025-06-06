import axios from "axios";
import { useEffect } from "react";

import { useUserStore } from "@/store/useUserStore";

const useUserProfile = () => {
  const { setUserSettings } = useUserStore();

  useEffect(() => {
    const initUserProfile = async () => {
      const storedId = localStorage.getItem("userId");
      if (!storedId) {
        return;
      }

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/users/${storedId}`
        );
        const { isAdDetect, isReturnChannel } = response.data;
        setUserSettings({ isAdDetect, isReturnChannel });
      } catch (error) {
        console.error("fetch user profile failed: ", error);
      }
    };
    initUserProfile();
  }, [setUserSettings]);
};

export default useUserProfile;
