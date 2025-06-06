import axios from "axios";

export const addInterestChannel = (userId, channelId) =>
  axios.post(
    `${import.meta.env.VITE_API_URL}/users/${userId}/interest-channels`,
    { channelId }
  );

export const removeInterestChannel = (userId, channelId) =>
  axios.delete(
    `${import.meta.env.VITE_API_URL}/users/${userId}/interest-channels`,
    { data: { channelId } }
  );
