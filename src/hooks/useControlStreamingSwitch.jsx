import { getChannelInfo } from "@/apis/radioChannels";
import { useChannelStore } from "@/store/useChannelStore";
import { useMiniPlayerStore } from "@/store/useMiniPlayerStore";
import { startStreamingPlay } from "@/utils/playControl";

const useControlStreamingSwitch = () => {
  const { setSelectedChannelId, setIsChannelChanged } = useChannelStore();
  const { setPlayingChannelId } = useMiniPlayerStore();

  const updateChannelState = (channelId) => {
    setSelectedChannelId(channelId);
    setPlayingChannelId(channelId);
    setIsChannelChanged(true);
  };

  const controlStreamingSwitch = async (video, channelId) => {
    const userId = localStorage.getItem("userId");
    try {
      const { data } = await getChannelInfo(channelId, userId);
      startStreamingPlay(video, data.url);
      updateChannelState(channelId);
    } catch (error) {
      console.error("fetch channelInfo failed", error);
    }
  };

  return controlStreamingSwitch;
};

export default useControlStreamingSwitch;
