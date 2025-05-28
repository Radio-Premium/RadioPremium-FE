import { useState } from "react";

import Checkbox from "./ui/Checkbox";

const ToggleCheckbox = ({
  isSelected,
  onSelect,
  parentOption,
  childrenOptions,
}) => {
  const [selectedChildId, setSelectedChildId] = useState(null);

  const handleParentClick = () => {
    onSelect(); // 부모 선택 상태 변경
    setSelectedChildId(null); // 자식 선택 초기화
  };

  const handleChildClick = (id) => {
    setSelectedChildId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <Checkbox
        checked={isSelected}
        onChange={handleParentClick}
        className="mt-[10px] text-[18px]"
      >
        {parentOption}
      </Checkbox>
      {isSelected && (
        <div className="mt-[3px] ml-5 flex flex-col gap-[4px]">
          {childrenOptions.map(({ id, label }) => (
            <Checkbox
              key={id}
              checked={selectedChildId === id}
              onChange={() => handleChildClick(id)}
              className="text-[16px]"
            >
              {label}
            </Checkbox>
          ))}
        </div>
      )}
    </>
  );
};

export default ToggleCheckbox;
