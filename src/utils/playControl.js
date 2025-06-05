import Hls from "hls.js";

const STREAM_URL =
  "https://mgugaklive.nowcdn.co.kr/gugakradio/gugakradio.stream/playlist.m3u8";
let hlsInstance = null;

const controlStreamPlayback = (videoId, isPlaying) => {
  const video = document.getElementById(videoId);

  if (isPlaying) {
    if (Hls.isSupported()) {
      hlsInstance = new Hls();
      hlsInstance.loadSource(STREAM_URL);
      hlsInstance.attachMedia(video);
      hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = STREAM_URL;
      video.play();
    }
  } else {
    video.pause();
  }
};

export default controlStreamPlayback;
