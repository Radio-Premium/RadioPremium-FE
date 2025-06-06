import Hls from "hls.js";

let hlsInstance = null;

const controlStreamingPlayback = (videoId, videoUrl, isPlaying) => {
  const video = videoId.current;

  if (isPlaying) {
    if (Hls.isSupported()) {
      hlsInstance = new Hls();
      hlsInstance.loadSource(videoUrl);
      hlsInstance.attachMedia(video);
      hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoUrl;
      video.play();
    }
  } else {
    video.pause();
  }
};

export default controlStreamingPlayback;
