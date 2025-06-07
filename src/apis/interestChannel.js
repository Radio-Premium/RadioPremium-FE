import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const createInterestChannel = (userId, channelId) =>
  axios.post(`${BASE_URL}/users/${userId}/interest-channels`, { channelId });

export const deleteInterestChannel = (userId, channelId) =>
  axios.delete(`${BASE_URL}/users/${userId}/interest-channels`, {
    data: { channelId },
  });

export const updateInterestChannels = (userId, channelIds) =>
  axios.put(`${BASE_URL}/users/${userId}/interest-channels`, { channelIds });
