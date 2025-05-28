import { useState } from "react";

import ToggleCheckbox from "./ToggleCheckbox";
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
      <div>
        <button className="">취소</button>
        <button className="">확인</button>
      </div>
    </Modal>
  );
};

export default AdReportModal;
