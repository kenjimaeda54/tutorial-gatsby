import React from "react"
import NavBar from "./navBar"
import Footer from "./footer"

export default function Layout({ children }) {
  return (
    <main>
      <NavBar />
      {children}
      <Footer />
    </main>
  )
}
