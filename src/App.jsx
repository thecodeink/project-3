import './App.css'
import Shows from './components/Shows'
import MainContent from './components/MainContent.jsx'
// import data from './data.js'

const App = () => {
  return (
    <div className="flex-row">
      <h1>My Top Fav 25 90's & 2000's TV Shows</h1>
      <MainContent />
      <Shows />
    </div>
  )
}

export default App
