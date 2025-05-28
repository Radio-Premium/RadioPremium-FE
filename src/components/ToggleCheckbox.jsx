import Checkbox from "./ui/Checkbox";

const ToggleCheckbox = ({
  isSelected,
  onSelect,
  parentOption,
  childrenOptions,
}) => {
  return (
    <>
      <Checkbox
        checked={isSelected}
        onChange={onSelect}
        className="mt-[10px] text-[18px]"
      >
        {parentOption}
      </Checkbox>
      {isSelected && (
        <div className="mt-[3px] ml-5 flex flex-col gap-[4px]">
          {childrenOptions.map(({ id, label }) => (
            <Checkbox key={id} className="text-[16px]">
              {label}
            </Checkbox>
          ))}
        </div>
      )}
    </>
  );
};

export default ToggleCheckbox;
