import { useEffect } from "react";

import useChannelSwitch from "@/hooks/useChannelSwitch";
import useUserId from "@/hooks/useUserId";
import socket from "@/sockets/socketClient";

const useAdKeywordsSocketListener = (videoId) => {
  const handleChannelSwitch = useChannelSwitch(videoId);
  const userId = useUserId();

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
      socket.emit("registerUser", { userId });
    });

    socket.on("radioText", ({ isAd }) => {
      handleChannelSwitch(isAd);
    });

    socket.on("disconnect", () => {
      console.log("disconnect");
    });

    return () => {
      socket.off("connect");
      socket.off("radioText");
      socket.off("disconnect");
    };
  }, [handleChannelSwitch, userId]);
};

export default useAdKeywordsSocketListener;
