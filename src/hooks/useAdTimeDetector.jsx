import { useEffect, useRef } from "react";

const isAdTimeNow = (minutes, seconds) => {
  const isPreHalfHourAdTime =
    (minutes === 27 && seconds >= 30) ||
    minutes === 28 ||
    minutes === 29 ||
    (minutes === 30 && seconds === 0);

  const isPreOnHourAdTime =
    minutes === 57 ||
    minutes === 58 ||
    minutes === 59 ||
    (minutes === 0 && seconds === 0);

  return isPreHalfHourAdTime || isPreOnHourAdTime;
};

const useAdTimeDetector = (handleChannelSwitch) => {
  const isAdTimeAlreadyHandled = useRef(false);

  useEffect(() => {
    const checkAdTime = () => {
      const now = new Date();
      const isAdTime = isAdTimeNow(now.getMinutes(), now.getSeconds());

      if (isAdTime && !isAdTimeAlreadyHandled.current) {
        isAdTimeAlreadyHandled.current = true;
        handleChannelSwitch(true);
      }

      if (!isAdTime && isAdTimeAlreadyHandled.current) {
        isAdTimeAlreadyHandled.current = false;
        handleChannelSwitch(false);
      }
    };

    const timer = setInterval(checkAdTime, 10000);

    return () => clearInterval(timer);
  }, [handleChannelSwitch]);
};

export default useAdTimeDetector;
