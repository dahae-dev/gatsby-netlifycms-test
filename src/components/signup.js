import React from "react"
import { navigate } from "gatsby"
import { handleSignup, isLoggedIn } from "../services/auth"

class Signup extends React.Component {
  state = {
    username: ``,
    password: ``,
    name: ``,
    email: ``,
    isSignedUp: false,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    const result = await handleSignup(this.state)
    this.setState({
      isSignedUp: result,
    })
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/app/profile`)
    }

    if (this.state.isSignedUp) {
      navigate(`/app/login`)
    }

    return (
      <>
        <h1>Sign up</h1>
        <form
          method="post"
          onSubmit={event => {
            this.handleSubmit(event)
            // navigate(`/app/profile`)
          }}
        >
          <label>
            Username
            <input type="text" name="username" onChange={this.handleUpdate} />
          </label>
          <br />
          <label>
            Password
            <input
              type="password"
              name="password"
              onChange={this.handleUpdate}
            />
          </label>
          <br />
          <label>
            Name
            <input type="text" name="name" onChange={this.handleUpdate} />
          </label>
          <br />
          <label>
            Email
            <input type="email" name="email" onChange={this.handleUpdate} />
          </label>
          <br />
          <input type="submit" value="Sign up" />
        </form>
      </>
    )
  }
}

export default Signup
