import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  const navigate = useNavigate()

  const handleSignup = (e) => {
    e.preventDefault()

    if (!name || !email || !password || !confirmPassword) {
      setMessage('Please fill all fields')
      return
    }

    if (password.length < 6) {
      setMessage('Password must contain at least 6 characters')
      return
    }

    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
      return
    }

    const user = {
      name,
      email,
      password
    }

    localStorage.setItem('user', JSON.stringify(user))

    setMessage('Registration Successful')

    setTimeout(() => {
      navigate('/login')
    }, 1500)
  }

  return (
    <div className='form-container'>

      <h1>Signup</h1>

      <form onSubmit={handleSignup}>

        <input
          type='text'
          placeholder='Enter Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type='email'
          placeholder='Enter Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type='password'
          placeholder='Create Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type='password'
          placeholder='Confirm Password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type='submit'>Register</button>

      </form>

      <p className='error'>{message}</p>

      <p>
        Already have account? <Link to='/login'>Login</Link>
      </p>

    </div>
  )
}

export default Signup