import React, { useState } from "react"
import styled from "styled-components"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
import { Link, navigate } from "gatsby"
import { isLoggedIn, logout } from "../services/auth"
import Logo from "./reusable/Logo"

const StyledLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`

export default () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(true)
  }

  return (
    <div>
      <Navbar color="white" light expand="md">
        <NavbarBrand>
          <StyledLink to="/">
            <Logo />
          </StyledLink>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/about">
                ABOUT
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/topics">
                TOPICS
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/faq">
                FAQ
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/faq">
                APPLY
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <i className="fa fa-user-circle" />
              </DropdownToggle>
              {isLoggedIn() ? (
                <DropdownMenu right>
                  <DropdownItem tag={Link} to="profile">
                    마이페이지
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <a
                      href="/"
                      onClick={event => {
                        event.preventDefault()
                        logout(() => navigate(`/login`))
                      }}
                      style={{
                        color: "#212529",
                        textDecoration: "none",
                      }}
                    >
                      로그아웃
                    </a>
                  </DropdownItem>
                </DropdownMenu>
              ) : (
                <DropdownMenu right>
                  <DropdownItem tag={Link} to="login">
                    회원가입
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={Link} to="login">
                    로그인
                  </DropdownItem>
                </DropdownMenu>
              )}
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}
