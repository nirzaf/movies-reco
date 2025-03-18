import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import Rankings from './pages/Rankings'
import Streaming from './pages/Streaming'
import Profile from './pages/Profile'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/rankings" element={<Rankings />} />
          <Route path="/streaming" element={<Streaming />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
