import TabBar from "@/components/TabBar";
import ToggleButton from "@/components/ToggleButton";

const Settings = () => {
  return (
    <>
      <TabBar />
      <div className="p-4">
        <ul>
          <li className="my-4 flex h-[88px] w-full min-w-80 rounded-md bg-gray-100 p-2">
            <section className="w-72">
              <strong className="text-lg">광고 감지</strong>
              <p className="mb-[-4px] text-[#888888]">
                현재 채널에서 광고를 자동으로 감지합니다.
              </p>
              <p className="text-[#888888]">
                광고가 감지되면 다른 채널로 이동합니다.
              </p>
            </section>
            <section className="mx-auto my-auto">
              <ToggleButton />
            </section>
          </li>
          <li className="my-4 flex h-[88px] w-full min-w-80 rounded-md bg-gray-100 p-2">
            <section className="w-72">
              <strong className="text-lg">기존 채널로 이동</strong>
              <p className="mb-[-4px] text-[#888888]">
                이전 채널의 광고가 종료되면
              </p>
              <p className="text-[#888888]">자동으로 복귀합니다.</p>
            </section>
            <section className="mx-auto my-auto">
              <ToggleButton />
            </section>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Settings;
