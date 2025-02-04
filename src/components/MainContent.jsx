import shows from '../data'
import Shows from './Shows'

const MainContent = () => {
  console.log(shows)
  return (
    <div className="main">
      {shows.map((show, index) => (
        <Shows key={index} show={show} />
      ))}
    </div>
  )
}
export default MainContent
