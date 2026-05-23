import { useNavigate } from 'react-router-dom'
import HealthCard from '../components/HealthCard'

function Dashboard() {

  const navigate = useNavigate()

  const problems = [
    {
      title: 'Anxiety',
      description: 'Fear, nervousness and stress among students.',
      suffering: 250,
      recovered: 140,
      path: '/anxiety'
    },
    {
      title: 'Depression',
      description: 'Sadness and hopelessness affecting student life.',
      suffering: 180,
      recovered: 90,
      path: '/depression'
    },
    {
      title: 'Sleep Problems',
      description: 'Insomnia and unhealthy sleep cycles.',
      suffering: 210,
      recovered: 130,
      path: '/sleep'
    },
    {
      title: 'Overthinking',
      description: 'Continuous worrying and emotional imbalance.',
      suffering: 300,
      recovered: 180,
      path: '/overthinking'
    },
    {
      title: 'Loneliness',
      description: 'Feeling isolated and emotionally disconnected.',
      suffering: 120,
      recovered: 70,
      path: '/loneliness'
    }
  ]

  const logout = () => {
    localStorage.removeItem('loggedIn')
    navigate('/')
  }

  return (
    <div>

      <div className='dashboard-header'>
        <h1>Health Problems Dashboard</h1>

        <button onClick={logout}>Logout</button>
      </div>

      <div className='card-container'>

        {problems.map((problem, index) => (
          <HealthCard
            key={index}
            title={problem.title}
            description={problem.description}
            suffering={problem.suffering}
            recovered={problem.recovered}
            path={problem.path}
          />
        ))}

      </div>

    </div>
  )
}

export default Dashboard