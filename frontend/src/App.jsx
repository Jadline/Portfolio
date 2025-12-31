
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'

function App() {
  return(
    <div className="bg-[linear-gradient(180deg,#4f473e_0%,#4f473e_80%,#a89f95_100%)] min-h-screen">
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='projects' element={<Projects/>} />
      <Route path='about' element={<About/>}/>
    </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App
