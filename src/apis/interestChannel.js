import axios from "axios";

export const createInterestChannel = (userId, channelId) =>
  axios.post(
    `${import.meta.env.VITE_API_URL}/users/${userId}/interest-channels`,
    { channelId }
  );

export const deleteInterestChannel = (userId, channelId) =>
  axios.delete(
    `${import.meta.env.VITE_API_URL}/users/${userId}/interest-channels`,
    { data: { channelId } }
  );

export const updateInterestChannels = (userId, channelIds) =>
  axios.put(
    `${import.meta.env.VITE_API_URL}/users/${userId}/interest-channels`,
    { channelIds }
  );
