import { useEffect } from "react";

const useAdTimeDetector = (switchChannelOnAd) => {
  useEffect(() => {
    const checkAdTime = () => {
      const now = new Date();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      const isPreThirtyAdTime =
        (minutes === 27 && seconds >= 30) ||
        minutes === 28 ||
        minutes === 29 ||
        (minutes === 30 && seconds === 0);

      const isPreHourAdTime =
        minutes === 57 ||
        minutes === 58 ||
        minutes === 59 ||
        (minutes === 0 && seconds === 0);

      if (isPreThirtyAdTime || isPreHourAdTime) {
        switchChannelOnAd();
      }
    };
    const timer = setInterval(checkAdTime, 10000);

    return () => clearInterval(timer);
  }, [switchChannelOnAd]);
};

export default useAdTimeDetector;
