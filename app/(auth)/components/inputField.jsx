const InputField = ({
  type,
  label,
  placeholder,
  value,
  onChange,
  icon,
  required = false,
}) => {
  const Icon = icon;
  return (
    <div>
      <label className="block text-sm font-medium text-text-dark mb-2">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-text-semidark" />
        )}
        <input
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          className="w-full pl-10 pr-4 py-3 bg-gray-50 text-text-dark outline-none"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default InputField;
