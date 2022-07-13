import './Button.css'

export default function Button({ type, title, name, onClick, ...props }) {
  return (
    <button type={type} name={name} onClick={onClick} {...props}>
      {title}
    </button>
  )
}
