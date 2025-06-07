import {
  createInterestChannel,
  deleteInterestChannel,
} from "@/apis/interestChannel";
import useUserId from "@/hooks/useUserId";
import { useChannelStore } from "@/store/useChannelStore";

const useToggleFavorite = () => {
  const { interestChannelIds, setInterestChannelIds } = useChannelStore();
  const userId = useUserId();

  const toggleFavorite = async (channelId) => {
    const isFavorite = interestChannelIds.includes(channelId);

    try {
      if (isFavorite) {
        await deleteInterestChannel(userId, channelId);
        setInterestChannelIds(
          interestChannelIds.filter((id) => id !== channelId)
        );
      } else {
        await createInterestChannel(userId, channelId);
        setInterestChannelIds([...interestChannelIds, channelId]);
      }
    } catch (error) {
      console.error("fetch toggleFavorite failed: ", error);
    }
  };

  return toggleFavorite;
};

export default useToggleFavorite;
