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
    <div className="mb-3 sm:mb-4">
      <label className="block text-sm sm:text-base font-medium text-text-dark mb-1 sm:mb-2">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-text-semidark text-lg sm:text-xl" />
        )}
        <input
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-gray-50 text-text-dark outline-none text-sm sm:text-base"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default InputField;
