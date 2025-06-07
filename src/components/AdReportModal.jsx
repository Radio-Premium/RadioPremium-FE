import { useState } from "react";

import ToggleCheckbox from "@/components/ToggleCheckbox";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import useSubmitAdReport from "@/hooks/useSubmitAdReport";
import useUserId from "@/hooks/useUserId";

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

const AdReportModal = ({
  isChannelChanged,
  channelId,
  detectedAdPhrase,
  onClose,
}) => {
  const [selectedParentOption, setSelectedParentOption] = useState(null);
  const [selectedChildOption, setSelectedChildOption] = useState(null);

  const submitAdReport = useSubmitAdReport();
  const userId = useUserId();

  const availableReportOptions = Object.entries(AD_REPORT_OPTIONS).filter(
    ([key]) => {
      if (!isChannelChanged) {
        return true;
      }

      return key === AD_REPORT_TYPES.AD;
    }
  );
  const toggleParentOption = (option) => {
    setSelectedParentOption((prev) => (prev === option ? null : option));
  };

  const handleSubmit = async () => {
    const isAd = selectedParentOption === AD_REPORT_TYPES.AD;

    await submitAdReport({
      userId: Number(userId),
      isAd,
      detectedAdPhrase,
      channelId,
    });

    onClose();
  };

  return (
    <Modal
      title="현재 방송이 광고인지 선택해주세요."
      subTitle="광고일 경우, 채널을 변경할 수 있습니다."
    >
      <div className="flex flex-col items-center">
        <div className="w-[90%] max-w-[360px] text-left">
          {availableReportOptions.map(
            ([key, { parentOption, childrenOptions }]) => (
              <ToggleCheckbox
                key={key}
                isSelected={selectedParentOption === key}
                onSelect={() => toggleParentOption(key)}
                parentOption={parentOption}
                childrenOptions={childrenOptions}
                selectedSubOptionId={selectedChildOption}
                onSelectSubOption={setSelectedChildOption}
              />
            )
          )}
        </div>
      </div>
      <div className="mt-[25px] flex w-full justify-end gap-x-2">
        <Button
          className="flex h-[35px] w-[75px] items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-[16px] text-black hover:bg-gray-100"
          onClick={onClose}
        >
          취소
        </Button>
        <Button
          className="flex h-[35px] w-[75px] items-center justify-center rounded-md bg-[#5B4DFF] px-4 py-2 text-[16px] text-white hover:bg-[#4F46E5]"
          onClick={handleSubmit}
          disabled={!selectedParentOption || !selectedChildOption}
        >
          확인
        </Button>
      </div>
    </Modal>
  );
};

export default AdReportModal;
