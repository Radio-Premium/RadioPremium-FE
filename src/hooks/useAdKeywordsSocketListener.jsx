import { useEffect } from "react";

import useChannelSwitch from "@/hooks/useChannelSwitch";
import socket from "@/sockets/socketClient";

const useAdKeywordsSocketListener = () => {
  const handleChannelSwitch = useChannelSwitch();

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
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
  }, [handleChannelSwitch]);
};

export default useAdKeywordsSocketListener;
