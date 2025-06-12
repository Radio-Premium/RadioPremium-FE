import axios from "axios";

export const stopWhisperServer = async (userId) => {
  try {
    const whisperServerURL = import.meta.env.VITE_WHISPER_API_URL;
    await axios.post(`${whisperServerURL}/stop`, { userId });
  } catch (error) {
    console.error("❌ Whisper 종료 실패", error);
  }
};
