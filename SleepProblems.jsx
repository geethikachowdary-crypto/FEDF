import RegistrationForm from '../components/RegistrationForm'
import FeedbackForm from '../components/FeedbackForm'

function SleepProblems() {
  return (
    <div className='module-page'>
      <h1>Sleep Problems Module</h1>

      <p>
        Sleep disorders reduce focus, health and academic performance.
      </p>

      <ul>
        <li>Insomnia</li>
        <li>Fatigue</li>
        <li>Stress due to late-night study</li>
        <li>Lack of concentration</li>
      </ul>

      <h3>Students Suffering: 210</h3>
      <h3>Recovered Students: 130</h3>

      <RegistrationForm />

      <FeedbackForm />
    </div>
  )
}

export default SleepProblems