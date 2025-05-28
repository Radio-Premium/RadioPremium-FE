import { useState } from "react";

import ToggleCheckbox from "./ToggleCheckbox";
import Button from "./ui/Button";
import Modal from "./ui/modal";

const AD_REPORT_TYPES = {
  AD: "ad",
  NOT_AD: "notAd",
};

const AD_REPORT_OPTIONS = {
  [AD_REPORT_TYPES.AD]: {
    parentOption: "광고입니다",
    childrenOptions: ["다른 채널로 이동하기", "현재 채널 계속 시청하기"],
  },
  [AD_REPORT_TYPES.NOT_AD]: {
    parentOption: "광고가 아닌데 채널이 이동했습니다",
    childrenOptions: ["이전 채널로 이동하기", "현재 채널 계속 시청하기"],
  },
};

const AdReportModal = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption((prev) => (prev === option ? null : option));
  };

  return (
    <Modal
      title="현재 방송이 광고인지 선택해주세요."
      subTitle="방송일 경우, 채널을 변경할 수 있습니다."
    >
      <div>
        {Object.entries(AD_REPORT_OPTIONS).map(
          ([key, { parentOption, childrenOptions }]) => (
            <ToggleCheckbox
              key={key}
              isSelected={selectedOption === key}
              onSelect={() => handleSelect(key)}
              parentOption={parentOption}
              childrenOptions={childrenOptions}
            />
          )
        )}
      </div>
      <div className="flex justify-end gap-x-2">
        <Button className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-black hover:bg-gray-100">
          취소
        </Button>
        <Button className="rounded-md bg-[#5B4DFF] px-4 py-2 text-sm text-white hover:bg-[#4F46E5]">
          확인
        </Button>
      </div>
    </Modal>
  );
};

export default AdReportModal;
