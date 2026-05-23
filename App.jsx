import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Anxiety from './pages/Anxiety'
import Depression from './pages/Depression'
import SleepProblems from './pages/SleepProblems'
import Overthinking from './pages/Overthinking'
import Loneliness from './pages/Loneliness'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/anxiety' element={<Anxiety />} />
        <Route path='/depression' element={<Depression />} />
        <Route path='/sleep' element={<SleepProblems />} />
        <Route path='/overthinking' element={<Overthinking />} />
        <Route path='/loneliness' element={<Loneliness />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App