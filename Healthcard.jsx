import { Link } from 'react-router-dom'

function HealthCard({ title, description, suffering, recovered, path }) {
  return (
    <div className='card'>
      <h2>{title}</h2>

      <p>{description}</p>

      <h4>Students Suffering: {suffering}</h4>

      <h4>Recovered Students: {recovered}</h4>

      <Link to={path}>
        <button>View Module</button>
      </Link>
    </div>
  )
}

export default HealthCard