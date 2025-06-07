import axiosInstance from "@/apis/axiosInstance";

export const getChannelInfo = (channelId) =>
  axiosInstance.get(`/radio-channels/${channelId}`);
