import './App.css'
import Nav from './components/Nav.jsx'
import MainContent from './components/MainContent.jsx'
import Title from './components/Title.jsx'

const App = () => {
  return (
    <div className="app-container">
      <Nav />
      <Title />
      <MainContent />
    </div>
  )
}

export default App
