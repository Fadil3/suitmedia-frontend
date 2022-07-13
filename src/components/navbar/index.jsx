import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <h1>Company</h1>
      <ul className="regular__menu">
        <li>
          <a href="#">ABOUT</a>
          <ul className="dropdown">
            <li>
              <a href="#">HISTORY</a>
            </li>
            <li>
              <a href="#">VISION MISSION</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">OUR WORK</a>
        </li>
        <li>
          <a href="#">OUR TEAM</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
      </ul>
      <ul className="responsive__menu">
        <li>
          <a href="#">☰</a>
          <ul className="dropdown">
            <li>
              <a href="#">ABOUT</a>
              <div className="child">
                <li>
                  <a href="#">HISTORY</a>
                </li>
                <li>
                  <a href="#">VISION MISSION</a>
                </li>
              </div>
            </li>
            <li>
              <a href="#">OUR WORK</a>
            </li>
            <li>
              <a href="#">OUR TEAM</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}
