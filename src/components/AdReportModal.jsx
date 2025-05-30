import { useState } from "react";

import ToggleCheckbox from "@/components/ToggleCheckbox";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/modal";

const AD_REPORT_TYPES = {
  AD: "ad",
  NOT_AD: "not-ad",
};

const AD_REPORT_OPTIONS = {
  [AD_REPORT_TYPES.AD]: {
    parentOption: "광고입니다",
    childrenOptions: [
      { id: "move-other", label: "다른 채널로 이동하기" },
      { id: "ad-stay-current", label: "현재 채널 계속 시청하기" },
    ],
  },
  [AD_REPORT_TYPES.NOT_AD]: {
    parentOption: "광고가 아닌데 채널이 이동했습니다",
    childrenOptions: [
      { id: "move-previous", label: "다른 채널로 이동하기" },
      { id: "not-ad-stay-current", label: "현재 채널 계속 시청하기" },
    ],
  },
};

const AdReportModal = ({ isChannelChanged }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const availableReportOptions = Object.entries(AD_REPORT_OPTIONS).filter(
    ([key]) => {
      if (!isChannelChanged) {
        return true;
      }

      return key === AD_REPORT_TYPES.AD;
    }
  );
  const baseMinHeight = isChannelChanged ? "min-h-[95px]" : "min-h-[130px]";
  const toggleParentOption = (option) => {
    setSelectedOption((prev) => (prev === option ? null : option));
  };

  return (
    <Modal
      title="현재 방송이 광고인지 선택해주세요."
      subTitle="광고일 경우, 채널을 변경할 수 있습니다."
    >
      <div className={`flex w-[280px] flex-col items-start ${baseMinHeight}`}>
        {availableReportOptions.map(
          ([key, { parentOption, childrenOptions }]) => (
            <ToggleCheckbox
              key={key}
              isSelected={selectedOption === key}
              onSelect={() => toggleParentOption(key)}
              parentOption={parentOption}
              childrenOptions={childrenOptions}
            />
          )
        )}
      </div>
      <div className="mt-[20px] flex w-full justify-end gap-x-2">
        <Button className="flex h-[35px] w-[75px] items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-[16px] text-black hover:bg-gray-100">
          취소
        </Button>
        <Button className="flex h-[35px] w-[75px] items-center justify-center rounded-md bg-[#5B4DFF] px-4 py-2 text-[16px] text-white hover:bg-[#4F46E5]">
          확인
        </Button>
      </div>
    </Modal>
  );
};

export default AdReportModal;
