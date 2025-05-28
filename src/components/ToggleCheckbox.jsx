import Checkbox from "./ui/Checkbox";

const ToggleCheckbox = ({
  isSelected,
  onSelect,
  parentOption,
  childrenOptions,
}) => {
  return (
    <>
      <Checkbox checked={isSelected} onChange={onSelect}>
        {parentOption}
      </Checkbox>
      {isSelected && (
        <div>
          <div className="mt-1 ml-5 flex flex-col gap-1">
            <Checkbox>{childrenOptions[0]}</Checkbox>
            <Checkbox>{childrenOptions[1]}</Checkbox>
          </div>
        </div>
      )}
    </>
  );
};

export default ToggleCheckbox;
