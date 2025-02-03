import shows from '../data'
import Shows from './Shows'

const MainContent = () => {
  console.log(shows)
  return (
    <div className="main">
      <h1>My Top Fav 25 Cartoon Shows</h1>
      {shows.map((show, index) => (
        <Shows key={index} show={show} />
      ))}
    </div>
  )
}
export default MainContent
