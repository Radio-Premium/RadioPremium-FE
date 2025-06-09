import { useEffect } from "react";

import useChannelSwitch from "@/hooks/useChannelSwitch";
import useUserId from "@/hooks/useUserId";
import socket from "@/sockets/socketClient";

const useAdKeywordsSocketListener = (videoId) => {
  const handleChannelSwitch = useChannelSwitch(videoId);
  const userId = useUserId();

  useEffect(() => {
    if (!userId) return;

    const handleConnect = () => {
      console.log("connected");
      socket.emit("registerUser", { userId });
    };

    const handleRadioText = ({ isAd }) => {
      handleChannelSwitch(isAd);
    };

    const handleDisconnect = () => {
      console.log("disconnected");
    };

    socket.on("connect", handleConnect);
    socket.on("radioText", handleRadioText);
    socket.on("disconnect", handleDisconnect);

    if (socket.connected) {
      handleConnect();
    }

    return () => {
      socket.off("connect", handleConnect);
      socket.off("radioText", handleRadioText);
      socket.off("disconnect", handleDisconnect);
    };
  }, [handleChannelSwitch, userId]);
};

export default useAdKeywordsSocketListener;
