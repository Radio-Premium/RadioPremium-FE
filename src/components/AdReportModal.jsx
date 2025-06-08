import { useState } from "react";

import ToggleCheckbox from "@/components/ToggleCheckbox";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import {
  AD_REPORT_TYPES,
  AD_REPORT_OPTIONS,
} from "@/constants/adReportOptions";
import useSubmitAdReport from "@/hooks/useSubmitAdReport";
import useUserId from "@/hooks/useUserId";

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
      <div className="absolute bottom-38">
        <div className="w-full">
          <label className="block text-left text-sm whitespace-nowrap text-gray-600">
            📌 광고로 판단되는 멘트를 입력해주세요 (선택)
          </label>
          <input
            type="text"
            placeholder="EX) '하핑하핑'"
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 transition focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div className="mt-4 flex w-full justify-end gap-x-2">
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
      </div>
    </Modal>
  );
};

export default AdReportModal;
