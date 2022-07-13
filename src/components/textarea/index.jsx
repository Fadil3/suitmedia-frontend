import './Textarea.css'

export default function Textarea({
  title,
  name,
  handleChange,
  error,
  ...props
}) {
  return (
    <div div className="textarea__container">
      <label htmlFor={name}>{title}</label>
      <textarea
        style={{ borderColor: error !== '' ? 'red' : '#ccc' }}
        name={name}
        onChange={handleChange}
        {...props}
      ></textarea>
      {error && <span className="textarea__error">{error}</span>}
    </div>
  )
}
