import React from "react"
import { Router } from "@reach/router"
import Layout from "../../components/layout"
import PrivateRoute from "../../components/privateRoute"
import Profile from "../../components/profile"
// import { Header, Container } from "semantic-ui-react"
// import { getUser } from "../../services/auth"

const ProfilePage = () => (
  <>
    <Layout>
      <Router>
        <PrivateRoute path="/profile" component={Profile} />
      </Router>
    </Layout>
  </>
)

export default ProfilePage
