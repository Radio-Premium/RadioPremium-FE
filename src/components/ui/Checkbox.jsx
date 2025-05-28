const Checkbox = ({ children, checked, onChange }) => {
  return (
    <label className="flex cursor-pointer gap-2">
      <input type="checkbox" checked={checked} onChange={onChange} />
      {children}
    </label>
  );
};

export default Checkbox;
