import { useState } from 'react'

function RegistrationForm() {

  const [studentName, setStudentName] = useState('')
  const [studentEmail, setStudentEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleRegister = (e) => {
    e.preventDefault()

    const studentData = {
      studentName,
      studentEmail
    }

    localStorage.setItem(
      'registeredStudent',
      JSON.stringify(studentData)
    )

    setMessage('Registration Successful')

    setStudentName('')
    setStudentEmail('')
  }

  return (
    <div className='form-box'>

      <h2>Module Registration</h2>

      <form onSubmit={handleRegister}>

        <input
          type='text'
          placeholder='Enter Name'
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          required
        />

        <input
          type='email'
          placeholder='Enter Email'
          value={studentEmail}
          onChange={(e) => setStudentEmail(e.target.value)}
          required
        />

        <button type='submit'>Register</button>

      </form>

      <p>{message}</p>

    </div>
  )
}

export default RegistrationForm