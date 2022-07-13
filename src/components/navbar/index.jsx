import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <h1>Company</h1>
      <ul>
        <li>
          <a href="#">ABOUT</a>
          <ul class="dropdown">
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
    </nav>
  )
}
