import Hls from "hls.js";

import { getChannelInfo } from "@/apis/radioChannels";

let hlsInstance = null;

const controlStreamingPlayback = async (
  videoRef,
  selectedChannelId,
  isPlaying
) => {
  const video = videoRef.current;

  if (!isPlaying) {
    try {
      const { data } = await getChannelInfo(selectedChannelId);
      const url = data.url;

      if (hlsInstance) {
        hlsInstance.destroy();
        hlsInstance = null;
      }

      if (Hls.isSupported()) {
        hlsInstance = new Hls();
        hlsInstance.loadSource(url);
        hlsInstance.attachMedia(video);
        hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play();
        });
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = url;
        video.play();
      }
    } catch (error) {
      console.error("fetch channelInfo failed", error);
    }
  } else {
    video.pause();
  }
};

export default controlStreamingPlayback;
