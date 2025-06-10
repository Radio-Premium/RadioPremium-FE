import axiosInstance from "@/apis/axiosInstance";

export const getChannelInfo = (channelId, userId) =>
  axiosInstance.get(`/radio-channels/${channelId}`, {
    params: { userId },
  });

export const getRandomNoAdChannel = () =>
  axiosInstance.get("/radio-channels/random-no-ad");
