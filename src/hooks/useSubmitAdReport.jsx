import axios from "axios";

const useSubmitAdReport = () => {
  const reportAd = async ({ userId, isAd, detectedAdPhrase, channelId }) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_API_URL}/reports`,
        {
          userId,
          isAd,
          detectedAdPhrase,
          channelId,
        }
      );

      return data;
    } catch (error) {
      console.error("fetch ad report failed:", error);
    }
  };

  return reportAd;
};

export default useSubmitAdReport;
