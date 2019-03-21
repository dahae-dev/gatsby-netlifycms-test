import React from "react"
import { Header, Container } from "semantic-ui-react"
import { getUser } from "../services/auth"

const Profile = () => (
  <>
    <Container>
      <Header as="h1">Your profile</Header>
      <ul>
        <li>Name: {getUser().name}</li>
        <li>E-mail: {getUser().email}</li>
      </ul>
    </Container>
  </>
)

export default Profile
