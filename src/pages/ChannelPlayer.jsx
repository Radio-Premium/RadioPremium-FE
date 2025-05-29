import { useState } from "react";

import MainPauseIcon from "@/assets/svgs/icon-main-pause.svg?react";
import MainPlayIcon from "@/assets/svgs/icon-main-play.svg?react";
import ToggleButton from "@/components/ToggleButton";
import Button from "@/components/ui/Button";
import { SETTING_TYPES, SETTING_TITLES } from "@/constant/settingOptions";

const ChannelPlayer = ({ isChannelChanged }) => {
  // 데이터 연결 전 임시 값 할당
  const logoUrl =
    "https://www.urbanbrush.net/web/wp-content/uploads/edd/2019/08/urbanbrush-20190805082332272597.png";
  const mainTitle = "RDO 라디오방송";
  const [isPlaying, setIsPlaying] = useState(true);

  const buttonLabel = isChannelChanged
    ? SETTING_TITLES[SETTING_TYPES.RETURN_CHANNEL]
    : SETTING_TITLES[SETTING_TYPES.AD_DETECT];

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
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
          {mainTitle}
        </p>
        <div className="mt-2 flex items-center gap-x-2">
          <p className="text-sm font-semibold sm:text-base">{buttonLabel}</p>
          <ToggleButton />
        </div>

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
