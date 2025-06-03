import { useState } from "react";

import Checkbox from "@/components/ui/Checkbox";

const ToggleCheckbox = ({
  isSelected,
  onSelect,
  parentOption,
  childrenOptions,
}) => {
  const [selectedChildId, setSelectedChildId] = useState(null);

  const handleParentClick = () => {
    onSelect();
    setSelectedChildId(null);
  };

  const toggleChildOption = (id) => {
    setSelectedChildId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <Checkbox
        checked={isSelected}
        onChange={handleParentClick}
        labelClassName="text-[16px] whitespace-nowrap"
        inputClassName="h-[20px] min-h-[20px] w-[20px] min-w-[20px]"
      >
        {parentOption}
      </Checkbox>
      {isSelected && (
        <div className="mt-[3px] ml-5 flex flex-col gap-[4px]">
          {childrenOptions.map(({ id, label }) => (
            <Checkbox
              key={id}
              checked={selectedChildId === id}
              onChange={() => toggleChildOption(id)}
              labelClassName="text-[16px] whitespace-nowrap"
              inputClassName="h-[18px] min-h-[18px] w-[18px] min-w-[18px]"
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
