export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}

export const setUser = user => {
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))
}

export const handleSignup = async ({ username, password, name, email }) => {
  await fetch(`https://koreanjson.com/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
      name,
      email,
    }),
  })
    .then(data => {
      console.log("Request success: ", data)
      return true
    })
    .catch(error => {
      console.log("Request failure: ", error)
      return false
    })
}

export const handleLogin = async ({ username, password }) => {
  const users = await fetch(`https://koreanjson.com/users`)
    .then(res => res.json())
    .catch(err => console.log(err))

  const user = users.filter(user => user.username === username)[0]

  const result = await fetch(`https://koreanjson.com/users/${user.id}`)
    .then(res => res.json())
    .catch(err => console.log(err))

  // console.log("result: ", result)

  if (username === result.username && password === `pass`) {
    setUser({
      username: result.username,
      name: result.name,
      email: result.email,
    })
    return true
  }
  return false
}

export const isLoggedIn = () => {
  const user = getUser()

  return !!user.username
}

export const logout = callback => {
  setUser({})
  callback()
}
