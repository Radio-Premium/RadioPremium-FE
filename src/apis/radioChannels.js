import axiosInstance from "@/apis/axiosInstance";

export const getChannelInfo = (channelId, isAdDetect) =>
  axiosInstance.get(`/radio-channels/${channelId}`, {
    params: { isAdDetect },
  });
