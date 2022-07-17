import { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
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
          <a
            href="#"
            onClick={() => {
              setIsOpen(!isOpen)
            }}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            )}
          </a>
        </ul>
      </nav>
      {isOpen && (
        <div className="active">
          <ul className="responsive__item">
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
        </div>
      )}
    </>
  )
}
