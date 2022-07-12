import './Input.css'

export default function Input({
  type,
  title,
  name,
  placeholder,
  value,
  onChange,
  error,
  ...props
}) {
  return (
    <div className="input__container">
      <label htmlFor={name}>{title}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
      {error && <span className="input__error">{error}</span>}
    </div>
  )
}
