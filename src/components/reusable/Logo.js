import React from "react"
import styled from "styled-components"

import { logoColor } from "../../constants"

const Container = styled.span`
  font-family: Lovelo;
  font-size: 2rem;
  color: ${({ color }) => color};
  cursor: pointer;
`

const Logo = () => <Container color={logoColor}>STUDY | STATES</Container>

export default Logo
