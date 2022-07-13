import './Value.css'

export default function Value({
  title,
  desc,
  icon,
  color,
  haveArrow,
  borderColor,
}) {
  return (
    <div className="value__wrapper">
      <div
        className={`value__container`}
        style={{
          backgroundColor: color,

          border: `3px solid ${borderColor}`,
        }}
      >
        <div className="value__icon">
          <img src={icon} alt={title} />
        </div>
        <div className="value__title">
          <h2>{title}</h2>
        </div>
        <div className="value__desc">
          <p>{desc}</p>
        </div>
      </div>
      {haveArrow && (
        <>
          <div
            className="arrow-right"
            style={{ borderLeft: `16px solid ${color}` }}
          ></div>

          <div
            className="arrow-bottom"
            style={{ borderTop: `16px solid ${color}` }}
          ></div>
        </>
      )}
    </div>
  )
}
