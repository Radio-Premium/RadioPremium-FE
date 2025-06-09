import MainPauseIcon from "@/assets/svgs/icon-main-pause.svg?react";
import MainPlayIcon from "@/assets/svgs/icon-main-play.svg?react";
import Button from "@/components/ui/Button";
import ToggleButton from "@/components/ui/ToggleButton";
import { SETTING_TITLES, SETTING_TYPES } from "@/constants/settingOptions";
import useAdKeywordsSocketListener from "@/hooks/useAdKeywordsSocketListener";
import useChannelPlayback from "@/hooks/useChannelPlayback";
import useUpdateSetting from "@/hooks/useUpdateSetting";
import { useUserStore } from "@/store/useUserStore";

const ChannelPlayer = ({ isChannelChanged }) => {
  const { videoId, selectedChannel, isPlaying, handlePlayPause } =
    useChannelPlayback();
  const { name, logoUrl } = selectedChannel;

  useAdKeywordsSocketListener(videoId);

  const buttonLabel = isChannelChanged
    ? SETTING_TITLES[SETTING_TYPES.RETURN_CHANNEL]
    : SETTING_TITLES[SETTING_TYPES.AD_DETECT];

  const settingType = isChannelChanged
    ? SETTING_TYPES.RETURN_CHANNEL
    : SETTING_TYPES.AD_DETECT;

  const { settings } = useUserStore();

  const updateSetting = useUpdateSetting(settingType);

  const handleToggle = () => {
    updateSetting();
  };

  return (
    <div className="relative mx-auto flex h-[calc(100vh-80px)] max-w-md flex-col px-4 pb-28">
      <div className="flex flex-1 translate-y-8 flex-col items-center justify-center">
        <img
          className="aspect-[268/257] w-[70%] max-w-[268px] rounded-md object-cover"
          src={logoUrl}
          alt="채널 로고"
        />
        <p className="mt-3.5 text-center text-lg font-bold sm:text-xl">
          {name}
        </p>
        <div className="mt-2 flex items-center gap-x-2">
          <p className="text-sm font-semibold sm:text-base">{buttonLabel}</p>
          <ToggleButton
            size="s"
            checked={settings[settingType]}
            onToggle={handleToggle}
          />
        </div>
        <video ref={videoId} className="hidden" />
        <Button className="mt-12" onClick={handlePlayPause}>
          {isPlaying ? (
            <MainPauseIcon className="h-[60px] w-[60px] sm:h-[75px] sm:w-[75px]" />
          ) : (
            <MainPlayIcon className="h-[60px] w-[60px] sm:h-[75px] sm:w-[75px]" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default ChannelPlayer;
