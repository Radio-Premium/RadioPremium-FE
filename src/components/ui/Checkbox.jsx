const Checkbox = ({ children, checked, onChange }) => {
  return (
    <label className="block">
      <input type="checkbox" checked={checked} onChange={() => onChange()} />
      {children}
    </label>
  );
};

export default Checkbox;
