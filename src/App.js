import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'

function App() {
  const [state, setState] = useState({
    fullName: "",
    username: "",
    email: "",
    password: ""
  })

  const changeInput = (event) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }

  const onSubmit = (event) => {
    event.preventDefault()

    axios.post("http://localhost:4000/app/signup", state)
      .then(response => console.log(response.data))
      .catch(error => console.error(error))

    setState({
      fullName: "",
      username: "",
      email: "",
      password: ""
    })
  }

  return (
    <div>
      <div className="container">
        <div className="form-div">
          <form onSubmit={onSubmit}>
            <input
              className="form-control form-group"
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={state.fullName}
              onChange={changeInput}
            />

            <input
              className="form-control form-group"
              type="text"
              placeholder="Username"
              name="username"
              value={state.username}
              onChange={changeInput}
            />

            <input
              className="form-control form-group"
              type="text"
              placeholder="Email"
              name="email"
              value={state.email}
              onChange={changeInput}
            />

            <input
              className="form-control form-group"
              type="password"
              placeholder="Password"
              name="password"
              value={state.password}
              onChange={changeInput}
            />

            <input
              className="btn btn-danger btn-block"
              type="submit"
              value="Submit"
            />

          </form>
        </div>
      </div>
    </div>
  )
}

export default App