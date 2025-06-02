import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import socket from "@/sockets/socketClient";

const adKeywords = ["맥스", "SK브로드밴드", "대리운전"];

const useAdKeywordsSocketListener = () => {
  const navigate = useNavigate();

  // TODO: 광고 키워드 조회 API 연동해서 adKeywords Mock Data를 응답값으로 변경
  const checkAdKeywords = (text) => {
    return adKeywords.some((adKeyword) => adKeyword.includes(text));
  };

  const handleRadioAdText = useCallback(
    (text) => {
      if (checkAdKeywords(text)) {
        // TODO : 선호채널 목록 받아와서 /channel/:channelId 에 할당
        navigate("/channel/2");
      }
    },
    [navigate]
  );

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
    });

    socket.on("radioText", handleRadioAdText);

    socket.on("disconnect", () => {
      console.log("disconnect");
    });

    return () => {
      socket.off("connect");
      socket.off("radioText");
      socket.off("disconnect");
    };
  }, [handleRadioAdText]);
};

export default useAdKeywordsSocketListener;
