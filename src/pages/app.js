import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/reusable/privateRoute"
import Profile from "../components/profile"
import Login from "../components/test/login"
import Signup from "../components/test/signup"

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <Login path="/app/login" />
      <Signup path="/app/signup" />
    </Router>
  </Layout>
)

export default App
