import shows from '../data'
import Shows from './Shows'

const MainContent = () => {
  console.log(shows)
  return (
    <div className="main">
      <ul>
        {shows.map((show, index) => (
          <Shows key={index} show={show} />
        ))}
      </ul>
    </div>
  )
}
export default MainContent
