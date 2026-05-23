import RegistrationForm from '../components/RegistrationForm'
import FeedbackForm from '../components/FeedbackForm'

function Loneliness() {
  return (
    <div className='module-page'>
      <h1>Loneliness Module</h1>

      <p>
        Loneliness affects social interaction and emotional wellbeing.
      </p>

      <ul>
        <li>Feeling isolated</li>
        <li>Emotional sadness</li>
        <li>Low communication</li>
        <li>Low confidence</li>
      </ul>

      <h3>Students Suffering: 120</h3>
      <h3>Recovered Students: 70</h3>

      <RegistrationForm />

      <FeedbackForm />
    </div>
  )
}

export default Loneliness