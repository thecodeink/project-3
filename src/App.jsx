import './App.css'
import Nav from './components/Nav.jsx'

import MainContent from './components/MainContent.jsx'

const App = () => {
  return (
    <div className="flex-row">
      <Nav />
      <h1 className="title">My Top Fav 25 Cartoon Shows</h1>
      <MainContent />
    </div>
  )
}

export default App
