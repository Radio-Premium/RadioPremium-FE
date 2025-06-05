import axios from "axios";
import { useEffect, useState } from "react";

const useUserId = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserId = async () => {
      const storedId = localStorage.getItem("userId");

      if (storedId === null) {
        const {
          data: { userId },
        } = await axios.post(`${import.meta.env.VITE_API_URL}/users`);
        localStorage.setItem("userId", userId);
      } else {
        setUserId(storedId);
      }
    };

    fetchUserId();
  }, []);

  return userId;
};

export default useUserId;
