import AdRedirectChannelItem from "@/components/AdRedirectChannelItem";
import ChannelSection from "@/components/ChannelSection";
import SettingListItem from "@/components/SettingListItem";
import TabBar from "@/components/TabBar";
import {
  SETTING_TYPES,
  SETTING_TITLES,
  SETTING_EXPLANATIONS,
} from "@/constants/settingOptions";
import useUpdateSetting from "@/hooks/useUpdateSetting";
import { useUserStore } from "@/store/useUserStore";

const Settings = () => {
  const isAdDetect = useUserStore((state) => state.settings.isAdDetect);
  const adRedirectChannelId = useUserStore(
    (state) => state.settings.adRedirectChannelId
  );
  const updateAdRedirectChannelId = useUpdateSetting(
    SETTING_TYPES.AD_REDIRECT_CHANNEL_ID
  );

  const settingTypes = Object.values(SETTING_TYPES);

  const handleSelectRedirectChannel = (channelId) => {
    const updatedChannelId =
      adRedirectChannelId === channelId ? null : channelId;
    updateAdRedirectChannelId(updatedChannelId);
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
          {settingTypes.map(
            (type) =>
              type !== SETTING_TYPES.AD_REDIRECT_CHANNEL_ID && (
                <SettingListItem
                  key={type}
                  type={type}
                  title={SETTING_TITLES[type]}
                  explanations={SETTING_EXPLANATIONS[type]}
                />
              )
          )}
        </ul>
      </div>
      {isAdDetect && (
        <div className="px-4 pt-2">
          <ChannelSection
            title={SETTING_TITLES[SETTING_TYPES.AD_REDIRECT_CHANNEL_ID]}
            subTitleList={
              SETTING_EXPLANATIONS[SETTING_TYPES.AD_REDIRECT_CHANNEL_ID]
            }
            marginTop="mt-2"
            height="h-80"
          >
            {adRedirectChannelList.map(({ id, name, logoUrl }) => (
              <AdRedirectChannelItem
                key={id}
                channelId={id}
                channelName={name}
                thumbnail={logoUrl}
                isSelected={adRedirectChannelId === id}
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
