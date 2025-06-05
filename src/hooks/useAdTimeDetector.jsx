import { useEffect, useRef } from "react";

const useAdTimeDetector = (switchChannelOnAd) => {
  const isAdTimeAlreadyHandled = useRef(false);

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

      const isAdTime = isPreThirtyAdTime || isPreHourAdTime;

      if (isAdTime && !isAdTimeAlreadyHandled.current) {
        isAdTimeAlreadyHandled.current = true;
        switchChannelOnAd();
      }

      if (!isAdTime && isAdTimeAlreadyHandled.current) {
        isAdTimeAlreadyHandled.current = false;
      }
    };

    const timer = setInterval(checkAdTime, 10000);

    return () => clearInterval(timer);
  }, [switchChannelOnAd]);
};

export default useAdTimeDetector;
