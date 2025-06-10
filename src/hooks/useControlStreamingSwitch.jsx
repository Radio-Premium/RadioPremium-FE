import { getChannelInfo } from "@/apis/radioChannels";
import { useChannelStore } from "@/store/useChannelStore";
import { useMiniPlayerStore } from "@/store/useMiniPlayerStore";
import { startStreamingPlay } from "@/utils/playControl";

const userId = localStorage.getItem("userId");

const useControlStreamingSwitch = () => {
  const { setSelectedChannelId, setIsChannelChanged } = useChannelStore();
  const { setPlayingChannelId } = useMiniPlayerStore();

  const controlStreamingSwitch = async (video, channelId, isAdDetect) => {
    try {
      const { data } = await getChannelInfo(channelId, isAdDetect, userId);
      startStreamingPlay(video, data.url);
      setSelectedChannelId(channelId);
      setPlayingChannelId(channelId);
      setIsChannelChanged(true);
    } catch (error) {
      console.error("fetch channelInfo failed", error);
    }
  };

  return controlStreamingSwitch;
};

export default useControlStreamingSwitch;
