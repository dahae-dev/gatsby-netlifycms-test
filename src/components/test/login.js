import React, { useState } from "react"
import { navigate } from "gatsby"
import {
  Header,
  Container,
  Form,
  Input,
  Button,
  Segment,
  Message,
} from "semantic-ui-react"
import { handleLogin, isLoggedIn } from "../../services/auth"
import useForm from "../reusable/useForm"

const Login = () => {
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState([])

  const formLogin = () => {
    setLoading(true)
    handleLogin({ email: values.email, password: values.password })
      .then(() => {
        navigate("/app/profile")
      })
      .catch(e => {
        setLoading(false)
        setApiError(e.errors || e)
      })
  }

  const { values, handleChange, handleSubmit, errors } = useForm(
    formLogin,
    validate
  )

  const handleErrors = errors => {
    if (!Array.isArray(errors) && !errors.length > 0) {
      return (
        <Message
          error
          header="Sorry"
          content="Please check your login details and try again."
        />
      )
    }
    return errors.map(e => (
      <Message error header={e.title} content={e.detail} key={e.status} />
    ))
  }

  if (isLoggedIn()) {
    navigate(`/app/profile`)
  }

  return (
    <>
      <Container>
        <Header as="h1">Log in</Header>
        <Form
          onSubmit={event => handleSubmit(event)}
          loading={loading}
          error={apiError.length !== 0 || Object.entries(errors).length !== 0}
        >
          {apiError.length !== 0 ? handleErrors(errors) : null}
          <Segment>
            <Form.Field>
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                fluid
                name="email"
                type="email"
                autoFocus
                onChange={handleChange}
                value={values.email || ""}
              />
            </Form.Field>
            {errors.email && (
              <p data-testid="error" style={{ color: "red" }}>
                {errors.email}
              </p>
            )}
            <Form.Field>
              <label htmlFor="password">Password</label>
              <Input
                id="password"
                fluid
                name="password"
                type="password"
                value={values.password || ""}
                onChange={handleChange}
              />
            </Form.Field>
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
            <Button type="submit" color="orange">
              Login
            </Button>
            <Button type="submit" color="blue">
              Sign in with Facebook
            </Button>
          </Segment>
        </Form>
      </Container>
    </>
  )
}

export default Login

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = "Email address is required"
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid"
  }
  if (!values.password) {
    errors.password = "Password is required"
  }
  return errors
}