import Hls from "hls.js";

import { getChannelInfo } from "@/apis/radioChannels";

let hlsInstance = null;

export const startStreamingPlay = (video, url) => {
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
};

export const controlStreamingPlayback = async (
  videoRef,
  channelId,
  isPlaying,
  isAdDetect
) => {
  const video = videoRef.current;
  if (!isPlaying) {
    try {
      const { data } = await getChannelInfo(channelId, isAdDetect);
      startStreamingPlay(video, data.url);
    } catch (error) {
      console.error("fetch channelInfo failed", error);
    }
  } else {
    video.pause();
  }
};

export const controlStreamingSwitch = async (
  videoRef,
  channelId,
  isAdDetect
) => {
  const video = videoRef.current;
  try {
    const { data } = await getChannelInfo(channelId, isAdDetect);
    startStreamingPlay(video, data.url);
  } catch (error) {
    console.error("fetch channelInfo failed", error);
  }
};
