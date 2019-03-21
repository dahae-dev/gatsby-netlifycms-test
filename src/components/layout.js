import React from "react"
import NavBar from "./nav-bar"
import "semantic-ui-css/semantic.min.css"

const Layout = ({ children }) => (
  <>
    <NavBar />
    {children}
  </>
)

export default Layout
