const setUser = (userObject) => {
  return {
    type: "SET_USER",
    payload: userObject
  }
}

const logOut = () => {
  return {
    type: "LOG_OUT"
  }
}

export default {
  setUser,
  logOut
}