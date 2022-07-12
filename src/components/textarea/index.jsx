import './Textarea.css'

export default function Textarea({
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
    <div div className="textarea__container">
      <label htmlFor={name}>{title}</label>
      <textarea {...props}></textarea>
    </div>
  )
}
