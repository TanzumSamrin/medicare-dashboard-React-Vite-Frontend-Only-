function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder = "",
  options = [],
  error = "",
  required = false,
}) {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {label}
        {required && <span className="required">*</span>}
      </label>

      {/* Textarea */}
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          className={`form-control ${error ? "input-error" : ""}`}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          rows="4"
        />
      ) : type === "select" ? (
        /* Select */
        <select
          id={name}
          name={name}
          className={`form-control ${error ? "input-error" : ""}`}
          value={value}
          onChange={onChange}
        >
          <option value="">Select</option>

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        /* Input */
        <input
          id={name}
          name={name}
          type={type}
          className={`form-control ${error ? "input-error" : ""}`}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      )}

      {error && (
        <small className="error-text">
          {error}
        </small>
      )}
    </div>
  );
}

export default FormField;