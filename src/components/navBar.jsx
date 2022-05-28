import { Link } from "gatsby"
import React from "react"

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/company/about">About company</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  )
}
