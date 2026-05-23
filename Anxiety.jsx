import RegistrationForm from '../components/RegistrationForm'
import FeedbackForm from '../components/FeedbackForm'

function Anxiety() {
  return (
    <div className='module-page'>
      <h1>Anxiety Module</h1>

      <p>
        Anxiety causes fear, panic attacks, nervousness and exam stress among students.
      </p>

      <ul>
        <li>Fear and nervousness</li>
        <li>Fast heartbeat</li>
        <li>Lack of concentration</li>
        <li>Stress during exams</li>
      </ul>

      <h3>Students Suffering: 250</h3>
      <h3>Recovered Students: 140</h3>

      <RegistrationForm />

      <FeedbackForm />
    </div>
  )
}

export default Anxiety