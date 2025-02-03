import './App.css'
import Nav from './components/Nav.jsx'
import SideBar from './components/SideBar.jsx'
import MainContent from './components/MainContent.jsx'

const App = () => {
  return (
    <div className="flex-row">
      <Nav />
      <div className="title-container">
        <h1 className="title">My Top Fav 25 Cartoon Shows</h1>
      </div>
      <SideBar />
      <MainContent />
    </div>
  )
}

export default App
