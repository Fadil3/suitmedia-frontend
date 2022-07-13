import './Input.css'

export default function Input({
  type,
  title,
  name,
  handleChange,
  error,
  ...props
}) {
  return (
    <div className="input__container">
      <label htmlFor={name}>{title}</label>
      <input
        style={{ borderColor: error !== '' ? 'red' : '#ccc' }}
        type={type}
        name={name}
        onChange={handleChange}
        {...props}
      />
      {error && <span className="input__error">{error}</span>}
    </div>
  )
}
