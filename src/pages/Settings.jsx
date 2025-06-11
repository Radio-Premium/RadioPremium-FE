import SettingListItem from "@/components/SettingListItem";
import TabBar from "@/components/TabBar";
import {
  SETTING_TYPES,
  SETTING_TITLES,
  SETTING_EXPLANATIONS,
} from "@/constants/settingOptions";

import useUserProfile from "../hooks/useUserProfile";

const Settings = () => {
  const settingTypes = Object.values(SETTING_TYPES);

  const userId = localStorage.getItem("userId");
  useUserProfile(userId);

  return (
    <>
      <TabBar />
      <div className="p-4">
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
    </>
  );
};

export default Settings;
