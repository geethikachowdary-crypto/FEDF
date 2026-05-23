import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Navbar />

      <div className='hero'>
        <h1>Student Mental Health Support Hub</h1>

        <p>
          A FEDF React project developed to support students suffering from anxiety,
          depression, loneliness, overthinking and sleep disorders.
        </p>
      </div>

      <Footer />
    </>
  )
}

export default Home