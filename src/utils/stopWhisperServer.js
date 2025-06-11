import axios from "axios";

export const stopWhisperServer = async (userId) => {
  try {
    // 추후 배포 시 변경
    await axios.post("http://localhost:5000/stop", { userId });
  } catch (error) {
    console.error("❌ Whisper 종료 실패", error);
  }
};
