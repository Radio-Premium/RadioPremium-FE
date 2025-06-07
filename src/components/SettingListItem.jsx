import ToggleButton from "@/components/ui/ToggleButton";
import { useUserStore } from "@/store/useUserStore";

const SettingListItem = ({ type, title, explanations }) => {
  const { settings, setUserSettings } = useUserStore();

  const handleToggle = () => {
    setUserSettings({
      ...settings,
      [type]: !settings[type],
    });
  };

  return (
    <li className="my-4 flex h-[100px] w-full min-w-80 rounded-md bg-gray-100 px-4 pt-4">
      <div className="w-[272px]">
        <h2 className="text-lg font-semibold">{title}</h2>
        {explanations.map((explanation, index) =>
          index === 0 ? (
            <p
              key={index}
              className="mt-1 mb-[-4px] text-[14px] text-[#888888]"
            >
              {explanation}
            </p>
          ) : (
            <p key={index} className="text-[14px] text-[#888888]">
              {explanation}
            </p>
          )
        )}
      </div>
      <div className="my-auto ml-auto">
        <ToggleButton checked={settings[type]} onToggle={handleToggle} />
      </div>
    </li>
  );
};

export default SettingListItem;
