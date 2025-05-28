const Checkbox = ({ children, checked, onChange, className }) => {
  return (
    <label
      className={`flex cursor-pointer items-center gap-[10px] ${className}`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-[20px] min-h-[20px] w-[20px] min-w-[20px] shrink-0 accent-black"
      />
      {children}
    </label>
  );
};

export default Checkbox;
