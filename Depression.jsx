import RegistrationForm from '../components/RegistrationForm'
import FeedbackForm from '../components/FeedbackForm'

function Depression() {
  return (
    <div className='module-page'>
      <h1>Depression Module</h1>

      <p>
        Depression affects emotional balance, confidence and academic performance.
      </p>

      <ul>
        <li>Sadness</li>
        <li>Low confidence</li>
        <li>Hopelessness</li>
        <li>Loss of interest</li>
      </ul>

      <h3>Students Suffering: 180</h3>
      <h3>Recovered Students: 90</h3>

      <RegistrationForm />

      <FeedbackForm />
    </div>
  )
}

export default Depression