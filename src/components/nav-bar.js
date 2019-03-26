import React from "react"
import styled from "styled-components"
import { Link, navigate } from "gatsby"
import { isLoggedIn, logout } from "../services/auth"
import Logo from "./reusable/Logo"

const StyledLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`

export default () => {
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        justifyContent: "space-between",
        borderBottom: "1px solid #d1c1e0",
      }}
    >
      <nav>
        <StyledLink to="/">
          <Logo />
        </StyledLink>
        <StyledLink to="/about">ABOUT</StyledLink>
        {` `}
        <StyledLink to="/topics">TOPICS</StyledLink>
        {` `}
        <StyledLink to="/faq">FAQ</StyledLink>
        {` `}
        <StyledLink to="/apply">APPLY</StyledLink>
        {` `}
      </nav>
      <nav>
        {isLoggedIn() ? (
          <span>
            <a
              href="/"
              onClick={event => {
                event.preventDefault()
                logout(() => navigate(`/login`))
              }}
            >
              Logout
            </a>
            <a
              href="/"
              onClick={event => {
                event.preventDefault()
                navigate(`/profile`)
              }}
            >
              My Page
            </a>
          </span>
        ) : (
          <span>
            <a
              href="/"
              onClick={event => {
                event.preventDefault()
                navigate(`/signup`)
              }}
            >
              Sign up
            </a>
            <a
              href="/"
              onClick={event => {
                event.preventDefault()
                navigate(`/login`)
              }}
            >
              Login
            </a>
          </span>
        )}
      </nav>
    </div>
  )
}
