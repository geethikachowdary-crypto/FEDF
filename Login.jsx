import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    const storedUser = JSON.parse(localStorage.getItem('user'))

    await new Promise(resolve => setTimeout(resolve, 1000))

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      localStorage.setItem('loggedIn', true)
      navigate('/dashboard')
    }
    else {
      setMessage('Invalid Email or Password')
    }
  }

  return (
    <div className='form-container'>

      <h1>Login</h1>

      <form onSubmit={handleLogin}>

        <input
          type='email'
          placeholder='Enter Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label='Email'
        />

        <input
          type='password'
          placeholder='Enter Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          aria-label='Password'
        />

        <button type='submit'>Login</button>

      </form>

      <p className='error'>{message}</p>

      <p>
        Don't have account? <Link to='/signup'>Signup</Link>
      </p>

    </div>
  )
}

export default Login