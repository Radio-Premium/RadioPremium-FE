import { useState, useRef } from "react";

import ToggleCheckbox from "@/components/ToggleCheckbox";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import {
  AD_REPORT_TYPES,
  AD_REPORT_OPTIONS,
} from "@/constants/adReportOptions";
import useSubmitAdReport from "@/hooks/useSubmitAdReport";
import useUserId from "@/hooks/useUserId";

const AdReportModal = ({ isChannelChanged, channelId, onClose }) => {
  const [selectedParentOption, setSelectedParentOption] = useState(null);
  const [selectedChildOption, setSelectedChildOption] = useState(null);
  const userAdPhrase = useRef("");

  const submitAdReport = useSubmitAdReport();
  const userId = useUserId();

  const availableReportOptions = Object.entries(AD_REPORT_OPTIONS).filter(
    ([key]) => {
      if (isChannelChanged) {
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
      detectedAdPhrase: userAdPhrase.current || null,
      channelId,
    });

    onClose();
  };

  return (
    <Modal
      title="현재 방송이 광고인지 선택해주세요."
      subTitle="광고일 경우, 채널을 변경할 수 있습니다."
    >
      <div className="absolute inset-0 flex flex-col justify-between px-1">
        <div className="max-h-[160px] overflow-hidden">
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
        <div className="w-full">
          <label
            htmlFor="adPhraseInput"
            className="mb-2 block text-left text-sm text-gray-600"
          >
            📌 광고로 판단되는 멘트를 입력해주세요 (선택)
          </label>
          <input
            id="adPhraseInput"
            type="text"
            placeholder="EX) '하핑하핑'"
            defaultValue=""
            onChange={(e) => (userAdPhrase.current = e.target.value)}
            className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <div className="flex justify-end gap-x-2">
            <Button
              className="flex h-[35px] w-[75px] items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-[16px] text-black hover:bg-gray-100"
              onClick={onClose}
            >
              취소
            </Button>
            <Button
              className="flex h-[35px] w-[75px] items-center justify-center rounded-md bg-[#5B4DFF] px-4 py-2 text-[16px] text-white hover:bg-[#4F46E5] disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500"
              onClick={handleSubmit}
              disabled={!selectedParentOption || !selectedChildOption}
            >
              확인
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AdReportModal;
