import SettingListItem from "@/components/SettingListItem";
import TabBar from "@/components/TabBar";
import useUserProfile from "@/hooks/useUserProfile";

const settingList = [
  {
    type: "isAdDetect",
    title: "광고 감지",
    explanations: [
      "현재 채널에서 광고를 자동으로 감지합니다.",
      "광고가 감지되면 다른 채널로 이동합니다.",
    ],
  },
  {
    type: "isReturnChannel",
    title: "기존 채널로 이동",
    explanations: ["이전 채널의 광고가 종료되면", "자동으로 복귀합니다."],
  },
];

const Settings = () => {
  useUserProfile();

  return (
    <>
      <TabBar />
      <div className="p-4">
        <ul>
          {settingList.map(({ type, title, explanations }) => (
            <SettingListItem
              key={type}
              title={title}
              explanations={explanations}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Settings;
