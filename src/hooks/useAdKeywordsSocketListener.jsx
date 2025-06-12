import { useEffect } from "react";

import useChannelSwitch from "@/hooks/useChannelSwitch";
import useUserId from "@/hooks/useUserId";
import socket from "@/sockets/socketClient";

const useAdKeywordsSocketListener = () => {
  const handleChannelSwitch = useChannelSwitch();
  const userId = Number(useUserId());

  useEffect(() => {
    if (Number.isNaN(userId)) {
      return;
    }

    const handleConnect = () => {
      console.log("connected");
      socket.emit("registerUser", { userId: String(userId) });
    };

    const handleRadioText = ({ isAd }) => {
      handleChannelSwitch(isAd);
    };

    const handleDisconnect = () => {
      console.log("disconnected");
    };

    if (socket.connected) {
      handleConnect();
    }

    socket.on("connect", handleConnect);
    socket.on("radioText", handleRadioText);
    socket.on("disconnect", handleDisconnect);

    return () => {
      socket.off("connect", handleConnect);
      socket.off("radioText", handleRadioText);
      socket.off("disconnect", handleDisconnect);
    };
  }, [handleChannelSwitch, userId]);
};

export default useAdKeywordsSocketListener;
