import axiosInstance from "@/apis/axiosInstance";

export const getChannelInfo = (channelId, isAdDetect, userId) =>
  axiosInstance.get(`/radio-channels/${channelId}`, {
    params: { isAdDetect, userId },
  });

export const getRandomNoAdChannel = () =>
  axiosInstance.get("/radio-channels/random-no-ad");
