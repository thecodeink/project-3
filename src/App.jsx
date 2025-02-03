import './App.css'
import Nav from './components/Nav.jsx'
import SideBar from './components/SideBar.jsx'
import MainContent from './components/MainContent.jsx'

const App = () => {
  return (
    <div className="flex-row">
      <Nav />
      <SideBar />
      <MainContent />
    </div>
  )
}

export default App
