import React from "react"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../services/auth"

export default () => {
  const content = { message: "", login: true }
  if (isLoggedIn()) {
    content.message = `Hello, ${getUser().name}`
  } else {
    content.message = "You are not logged in"
  }
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        justifyContent: "space-between",
        borderBottom: "1px solid #d1c1e0",
      }}
    >
      <span>{content.message}</span>
      <nav>
        <Link to="/">Home</Link>
        {` `}
        <Link to="/profile">Profile</Link>
        {` `}
        {/* <Link to="/signup">Sign up</Link>
        {` `} */}
        {isLoggedIn() ? (
          <a
            href="/"
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/login`))
            }}
          >
            Logout
          </a>
        ) : (
          <a
            href="/"
            onClick={event => {
              event.preventDefault()
              navigate(`/login`)
            }}
          >
            Login
          </a>
        )}
      </nav>
    </div>
  )
}
