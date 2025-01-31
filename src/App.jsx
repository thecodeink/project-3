import './App.css'
import Shows from './components/Shows'
import MainContent from './components/MainContent.jsx'
import data from './data.js'
import shows from './data.js'

const App = () => {
  console.log(data)
  return (
    <div className="flex-row">
      <h1>My Top Fav 25 Cartoon Shows</h1>
      <MainContent />
      <Shows
        key={shows.abbreviation}
        title={shows.title}
        firstAired={shows.firstAired}
        image={shows.image}
      />
    </div>
  )
}

export default App
