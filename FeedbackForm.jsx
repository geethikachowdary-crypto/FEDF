import { useState } from 'react'

function FeedbackForm() {

  const [feedback, setFeedback] = useState('')
  const [message, setMessage] = useState('')

  const handleFeedback = (e) => {
    e.preventDefault()

    localStorage.setItem('feedback', feedback)

    setMessage('Feedback Submitted Successfully')

    setFeedback('')
  }

  return (
    <div className='form-box'>

      <h2>Student Feedback</h2>

      <form onSubmit={handleFeedback}>

        <textarea
          placeholder='Enter Your Feedback'
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        />

        <button type='submit'>Submit Feedback</button>

      </form>

      <p>{message}</p>

    </div>
  )
}

export default FeedbackForm