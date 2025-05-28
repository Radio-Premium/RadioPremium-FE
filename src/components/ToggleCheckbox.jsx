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
          <Checkbox>{childrenOptions[0]}</Checkbox>
          <Checkbox>{childrenOptions[1]}</Checkbox>
        </div>
      )}
    </>
  );
};

export default ToggleCheckbox;
