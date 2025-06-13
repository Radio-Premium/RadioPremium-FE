import { useState } from "react";

import AdRedirectChannelItem from "@/components/AdRedirectChannelItem";
import ChannelSection from "@/components/ChannelSection";
import SettingListItem from "@/components/SettingListItem";
import TabBar from "@/components/TabBar";
import {
  SETTING_TYPES,
  SETTING_TITLES,
  SETTING_EXPLANATIONS,
} from "@/constants/settingOptions";
import { useUserStore } from "@/store/useUserStore";

const Settings = () => {
  const [selectedRedirectChannelId, setSelectedRedirectChannelId] =
    useState(null);
  const isAdDetect = useUserStore((state) => state.settings.isAdDetect);
  const settingTypes = Object.values(SETTING_TYPES);

  const handleSelectRedirectChannel = (channelId) => {
    setSelectedRedirectChannelId((prevId) =>
      prevId === channelId ? null : channelId
    );
    // TODO: 동적 구현 시 update api 연결
  };

  // TODO: 동적 구현 시 임시 데이터 삭제
  const adRedirectChannelList = [
    {
      id: 0,
      name: "KBS 1라디오",
      logoUrl:
        "https://rpvlwzikmpjsvztgkytl.supabase.co/storage/v1/object/public/radio-logos//KBS1Radio.png",
      isSelected: true,
    },
    {
      id: 3,
      name: "KBS 1FM",
      logoUrl:
        "https://rpvlwzikmpjsvztgkytl.supabase.co/storage/v1/object/public/radio-logos//KBS1FM.png",
      isSelected: false,
    },
    {
      id: 5,
      name: "KBS 한민족방송",
      logoUrl:
        "https://rpvlwzikmpjsvztgkytl.supabase.co/storage/v1/object/public/radio-logos//KBSHanminjok.png",
      isSelected: false,
    },
    {
      id: 10,
      name: "고릴라디오M",
      logoUrl:
        "https://rpvlwzikmpjsvztgkytl.supabase.co/storage/v1/object/public/radio-logos//GOREALRADIO.png",
      isSelected: false,
    },
  ];

  return (
    <>
      <TabBar />
      <div className="px-4 pt-4">
        <ul>
          {settingTypes.map((type) => (
            <SettingListItem
              key={type}
              type={type}
              title={SETTING_TITLES[type]}
              explanations={SETTING_EXPLANATIONS[type]}
            />
          ))}
        </ul>
      </div>
      {isAdDetect && (
        <div className="px-4 pt-2">
          <ChannelSection
            title="광고 감지 시 이동할 채널"
            subTitleList={[
              "광고가 감지되면 자동으로 전환할 채널을 선택해 주세요.",
              "지정한 채널로 광고 중 자동 이동됩니다.",
            ]}
            marginTop="mt-2"
            height="h-80"
          >
            {adRedirectChannelList.map(({ id, name, logoUrl }) => (
              <AdRedirectChannelItem
                key={id}
                channelId={id}
                channelName={name}
                thumbnail={logoUrl}
                isSelected={selectedRedirectChannelId === id}
                onSelect={handleSelectRedirectChannel}
              />
            ))}
          </ChannelSection>
        </div>
      )}
    </>
  );
};

export default Settings;
